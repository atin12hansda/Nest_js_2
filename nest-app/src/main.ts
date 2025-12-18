import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger (OpenAPI) setup
  try {
    const { setupSwagger } = await import('./swagger');
    setupSwagger(app);
    console.log('Swagger docs available at http://localhost:3000/docs');
  } catch (err) {
    console.warn('Swagger setup failed:', err);
    if (err && (err as any).stack) {
      console.warn((err as any).stack);
    }
  }

  await app.listen(3000);
  console.log('Listening on http://localhost:3000');
}
bootstrap();
