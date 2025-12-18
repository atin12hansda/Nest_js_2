import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaService implements OnModuleInit {
  constructor(@Inject('KAFKA_SERVICE') private readonly client: ClientKafka) {}

  async onModuleInit() {
    // Ensure client is connected
    await this.client.connect();
  }

  async send(topic: string, value: any) {
    // `emit` returns an Observable; just call and let it send
    this.client.emit(topic, value);
  }
}
