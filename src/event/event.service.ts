import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class EventService {
  constructor(@Inject('ORDER_SERVICE') private readonly client: ClientKafka) {}

  receiveOrdersData(message: any) {
    const response =
      `Receiving a new message from topic: orders.summary: ` +
      JSON.stringify(message.value);
    console.log(response);
    return response;
  }
  receiveProductsData(message: any) {
    const response =
      `Receiving a new message from topic: products.summary: ` +
      JSON.stringify(message.value);
    console.log(response);
    return response;
  }

  receiveTestData(message: any) {
    const response =
      `Receiving a new message from topic: test: ` +
      JSON.stringify(message.value);
    console.log(response);
    return response;
  }
}
