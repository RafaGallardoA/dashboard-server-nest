import {Controller} from '@nestjs/common';
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { EventService } from './event/event.service';

@Controller()
export class AppController {
  constructor(    
    private readonly eventService: EventService,
  ) { }

  @MessagePattern('orders')
  readMessage(@Payload() message: any, @Ctx() context: KafkaContext) {
    const originalMessage = context.getMessage();
  
    return  this.eventService.receiveMessage(originalMessage);    
  }
}
