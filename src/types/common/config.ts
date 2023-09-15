export interface Config {
  port: number;
  env: string;
  baseUrl: string;
  db: {
    user: string;
    password: string;
    host: string;
    port: number;
    database: string;
  };
}
