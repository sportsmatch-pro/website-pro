/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly API_BASE_URL: string;
  readonly PUBLIC_GTM_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  dataLayer: unknown[];
  gtag: (...args: unknown[]) => void;
}