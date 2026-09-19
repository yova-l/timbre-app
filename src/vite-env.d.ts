/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TITLE?: string
  readonly VITE_FLOORS?: string
  readonly VITE_APTS_PER_FLOOR?: string
  readonly VITE_DEFAULT_MESSAGE?: string
  readonly [key: string]: string | undefined
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
