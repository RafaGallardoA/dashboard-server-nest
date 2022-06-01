import {Controller} from '@nestjs/common';
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { AppMSG } from './common/constants';
import { EventService } from './event/event.service';

@Controller()
export class AppController {
  constructor(    
    private readonly eventService: EventService,
  ) { }

  @MessagePattern(AppMSG.ORDERS_SUMMARY)
  listenOrdersSummary(@Payload() message: any, @Ctx() context: KafkaContext) {
    const originalMessage = context.getMessage();
  
    return this.eventService.receiveOrdersData(originalMessage);    
  }

  @MessagePattern(AppMSG.PRODUCTS_SUMMARY)
  listenProductsSummary(@Payload() message: any, @Ctx() context: KafkaContext) {
    const originalMessage = context.getMessage();

    return this.eventService.receiveProductsData(originalMessage);
  }

  @MessagePattern(AppMSG.TEST)
  listenTest(@Payload() message: any, @Ctx() context: KafkaContext) {
    const originalMessage = context.getMessage();

    return this.eventService.receiveTestData(originalMessage);
  }
}
