import { Injectable } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { KafkaService } from './kafka/kafka.service';

@Injectable()
export class AppService {
  constructor(private readonly kafkaService: KafkaService) {}

  @EventPattern(process.env.KAFKA_TOPIC || 'test-topic')
  handleTopicMessage(@Payload() message: any) {
    console.log('Consumed message', message);
    // Add message handling logic here
  }

  async sendToKafka(topic: string, value: any) {
    await this.kafkaService.send(topic, value);
  }
}
