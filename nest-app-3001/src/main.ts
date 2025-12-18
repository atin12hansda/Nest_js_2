import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger setup at /api
  const config = new DocumentBuilder()
    .setTitle('Nest App 3001')
    .setDescription('API docs for Nest app running on port 3001')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Connect a RabbitMQ microservice so this app can consume events
  const rmqUrl = process.env.RABBITMQ_URL || 'amqp://localhost:5672';
  const rmqQueue = process.env.RABBITMQ_QUEUE || 'main_queue';
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [rmqUrl],
      queue: rmqQueue,
      queueOptions: { durable: true },
    },
  });

  await app.startAllMicroservices();

  await app.listen(3001);
  console.log('Listening on http://localhost:3001');
  console.log('Swagger UI available at http://localhost:3001/api');
}
bootstrap();
