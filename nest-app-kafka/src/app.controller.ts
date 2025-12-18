import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot() {
    return { ok: true, msg: 'Nest Kafka app' };
  }

  @Post('send')
  async sendMessage(@Body() body: { topic?: string; value: any }) {
    const topic = body.topic || process.env.KAFKA_TOPIC || 'test-topic';
    await this.appService.sendToKafka(topic, body.value ?? body);
    return { status: 'sent', topic };
  }
}
