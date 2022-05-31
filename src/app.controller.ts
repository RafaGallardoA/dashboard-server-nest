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

  @MessagePattern('orders.summary')
  listenOrdersSummary(@Payload() message: any, @Ctx() context: KafkaContext) {
    const originalMessage = context.getMessage();
  
    return this.eventService.receiveOrdersData(originalMessage);    
  }

  @MessagePattern('products.summary')
  listenProductsSummary(@Payload() message: any, @Ctx() context: KafkaContext) {
    const originalMessage = context.getMessage();

    return this.eventService.receiveProductsData(originalMessage);
  }

  @MessagePattern('test')
  listenTest(@Payload() message: any, @Ctx() context: KafkaContext) {
    const originalMessage = context.getMessage();

    return this.eventService.receiveTestData(originalMessage);
  }
}
