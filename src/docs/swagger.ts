import swaggerJSDoc, { Options } from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
import fs from 'fs';

export const setupSwagger = (app: Express): void => {
  const swaggerOptions: Options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Book Management API',
        version: '1.0.0',
        description: 'API documentation for the Book Management API',
      },
    },
    apis: ['./src/controllers/*.ts'],
  };

  const swaggerSpec = swaggerJSDoc(swaggerOptions);

  fs.writeFileSync('./swagger.json', JSON.stringify(swaggerSpec, null, 2));

  app.use('/api-docs', swaggerUi.serve);
  app.get('/api-docs', swaggerUi.setup(swaggerSpec));
};