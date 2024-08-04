/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/react"/>
/// <reference types ="vite-plugin-pwa/info"/>
/// <reference lib="webworker"/>

interface ImportMetaEnv {
  readonly VITE_PROJECT_NAME: "ZODIAK";
  readonly VITE_TEST_SERVER: string;
  readonly VITE_APP_UI_BASE_URL: string;
  readonly VITE_APP_CANCEL_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
