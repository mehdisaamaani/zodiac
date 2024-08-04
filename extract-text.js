import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const sourceDir = join(__dirname, 'src');
const outputFile = join(__dirname, 'extracted-text.txt');

async function extractTextFromJSX(code) {
  const texts = [];
  const ast = parse(code, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });

  traverse(ast, {
    JSXText({ node }) {
      texts.push(node.value.trim());
    },
    JSXAttribute({ node }) {
      if (node.value && node.value.type === 'StringLiteral') {
        texts.push(node.value.value.trim());
      }
    },
  });

  return texts;
}

async function readFiles(dir) {
  const files = await fs.readdir(dir);
  const results = await Promise.all(
    files.map(async (file) => {
      const filePath = join(dir, file);
      const stat = await fs.stat(filePath);
      if (stat.isDirectory()) {
        return readFiles(filePath);
      } else if (file.endsWith('.jsx') || file.endsWith('.tsx')) {
        return [filePath];
      }
      return [];
    })
  );
  return results.flat();
}

async function main() {
  try {
    const files = await readFiles(sourceDir);
    const allTexts = await Promise.all(
      files.map(async (file) => {
        const code = await fs.readFile(file, 'utf-8');
        return extractTextFromJSX(code);
      })
    );
    const extractedText = allTexts.flat().join('\n');
    await fs.writeFile(outputFile, extractedText, 'utf-8');
    console.log(`Extracted text has been saved to ${outputFile}`);
  } catch (err) {
    console.error('Error:', err);
  }
}

main();