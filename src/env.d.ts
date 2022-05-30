/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

interface AnyObject {
  [key: string]: any;
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE?: string;
  readonly VITE_BASE_URL?: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
