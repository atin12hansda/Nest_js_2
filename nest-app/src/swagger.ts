import { INestApplication } from '@nestjs/common';
import * as swaggerUi from 'swagger-ui-express';

const openApiDocument = {
  openapi: '3.0.0',
  info: { title: 'Nest App', version: '1.0.0', description: 'A minimal NestJS app with Swagger UI' },
  paths: {
    '/': {
      get: {
        summary: 'Root',
        responses: {
          '200': {
            description: 'OK',
            content: {
              'text/plain': { schema: { type: 'string' } }
            }
          }
        }
      }
    }
  }
};

export function setupSwagger(app: INestApplication) {
  const httpAdapter = (app as any).getHttpAdapter();
  const expressApp = httpAdapter?.getInstance?.() ?? httpAdapter;
  expressApp.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));
}
