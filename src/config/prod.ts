import { Config } from "src/types/common/config";

const config: Config = {
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 80,
  env: process.env.NODE_ENV || "prod",
  baseUrl: "http://localhost:3000",
  db: {
    user: "postgres",
    password: "12345678",
    host: "localhost",
    port: 5432,
    database: "mortru",
  }
};

export default config;
