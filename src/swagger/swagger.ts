import swaggerJSDoc, { Options } from "swagger-jsdoc";
import path from "path";

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Assets API",
      version: "1.0.0",
    },
  },
  // Path to the Swagger definition
  apis: [path.join(__dirname, "../routes/*.ts")],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
