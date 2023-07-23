/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_LOGIN_PASS: string;
    readonly VITE_LOGIN_USER: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

