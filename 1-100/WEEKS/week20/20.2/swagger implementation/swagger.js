const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { openspec } = require('./openapispec');

const specs = swaggerJsdoc({ definition: openspec, apis: [] });

module.exports = { specs, swaggerUi };
