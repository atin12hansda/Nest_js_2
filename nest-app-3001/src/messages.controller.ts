import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class MessagesController {
  @EventPattern('test')
  handleTest(@Payload() payload: any) {
    // Simple processing: log and acknowledge
    console.log('[MessagesController] Received test message:', payload);
    // Add real processing logic here (DB calls, side effects, etc.)
  }
}
