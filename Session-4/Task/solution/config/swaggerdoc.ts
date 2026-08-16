import swaggerJSDoc from "swagger-jsdoc";

export const swaggerOptions: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Crew Management API",
      version: "1.0.0",
      description: "API for managing Sindbad's crew members and missions.",
    },
  },

  apis: ["./routes/*.ts"],
};

export const specs = swaggerJSDoc(swaggerOptions);