import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class EventService {
  constructor(@Inject('ORDER_SERVICE') private readonly client: ClientKafka) {}

  receiveMessage(message: any) {
    const response =
      `Receiving a new message from topic: orders: ` +
      JSON.stringify(message.value);
    console.log(response);
    return response;
  }
}
