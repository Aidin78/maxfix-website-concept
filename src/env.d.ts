interface ImportMetaEnv {
  /** Endpoint that receives the request form (multipart/form-data POST). */
  readonly PUBLIC_FORM_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
