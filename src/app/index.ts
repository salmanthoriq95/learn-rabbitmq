import { Application } from 'express';
import cors from 'cors';
import errorHandler from './errors';
import routes from './routes';
import helmet from 'helmet';
import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'rabbitmq',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express. It example boilerplate.',
    contact: {
      name: 'Salman Thoriq Al Farisyi',
      email: 'salmanthoriq95@gmail.com',
    },
  },
};

const swaggerSpec = swaggerJSDoc({
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./src/app/services/**/*.routes.ts'],
});

export default (app: Application): void => {
  // Middleware
  app.use(cors());
  app.use(helmet());
  app.use(express.json());

  // Documentation handling
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Api Handling
  Object.keys(routes).forEach((key) => {
    app.use('/', (routes as any)[key]);
  });

  // Error Handling
  app.use(errorHandler);

  // Unhandling Rejection Expection
  process.on('unhandledRejection', (reason: string, p: Promise<any>) => {
    console.log(p);
    throw reason;
  });

  process.on('uncaughtException', (error: Error) => {
    console.log(error);
    process.exit(1);
  });
};
