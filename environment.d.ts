declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_GOOGLE_CLIENT_ID: string; // this is the line you want
        NODE_ENV: 'development' | 'production'|'local';
        PORT?: string;
        DB_NAME:string;
        DB_PASSWORD:string;
        DB_USERNAME:string;
        DB_HOST:string;
        GOOGLE_ID:string;
        GOOGLE_SECRET:string;
        GITHUB_ID:string;
        GITHUB_SECRET:string;
      }
    }
  }
  export{}