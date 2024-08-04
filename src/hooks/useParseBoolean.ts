const falsy: RegExp = /^(?:f(?:alse)?|no?|0+)$/i;

export function useParseBoolean(value: string): boolean {
  return !falsy.test(value) && !!value;
}
