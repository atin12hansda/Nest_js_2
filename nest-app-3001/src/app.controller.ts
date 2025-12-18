import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import { AppService } from './app.service';
import { RabbitMQService } from './rabbitmq.service';

@ApiTags('root', 'messages')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly rabbitMq: RabbitMQService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Root endpoint' })
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('publish')
  @ApiOperation({ summary: 'Publish a message to RabbitMQ (forwarded to the queue)' })
  @ApiBody({ schema: { example: { pattern: 'test', message: { hello: 'world' } } } })
  publish(@Body() body: { pattern?: string; message: any }) {
    const pattern = body?.pattern || 'default_pattern';
    const message = body?.message ?? body;
    this.rabbitMq.publish(pattern, message);
    return { ok: true, pattern };
  }
}
