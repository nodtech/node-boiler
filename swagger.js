const swaggerJsdoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Universal consent',
    version: '1.0.0',
    description: 'A simple API documentation',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Path to your API files
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
