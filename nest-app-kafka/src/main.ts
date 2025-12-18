import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Attach Kafka microservice to receive messages
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: { brokers: [process.env.KAFKA_BROKER || 'localhost:9092'] },
      consumer: { groupId: process.env.KAFKA_CONSUMER_GROUP || 'nest-kafka-group' }
    }
  });

  await app.startAllMicroservices();
  await app.listen(3002);

  console.log('Nest Kafka app listening on http://localhost:3002');
}

bootstrap();
