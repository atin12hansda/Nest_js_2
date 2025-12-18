import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class RabbitMQService implements OnModuleInit {
  constructor(@Inject('RABBITMQ_SERVICE') private readonly client: ClientProxy) {}

  async onModuleInit() {
    try {
      await this.client.connect();
    } catch (err) {
      // silent, connection may be established lazily
    }
  }

  publish(pattern: string, data: any) {
    this.client.emit(pattern, data);
  }

  async send<T = any>(pattern: string, data: any): Promise<T> {
    const obs = this.client.send<T>(pattern, data);
    return lastValueFrom(obs);
  }
}
