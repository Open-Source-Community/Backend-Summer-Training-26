import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Explorer API",
      version: "1.0.0",
      description: "A simple Express Explorer API",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3000}`,
      },
    ],
  },
  apis: ["./routes/*.ts"],
};

export const specs = swaggerJsdoc(options);