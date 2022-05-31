import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateProductDto } from '../product/create-product.dto';
import { ProductService } from '../product/product.service';


@Injectable()
export class EventService {
  constructor(@Inject('ORDER_SERVICE') private readonly client: ClientKafka, private readonly productService: ProductService) {}

  async receiveOrdersData(message: any) {
    const response =
      `Receiving a new message from topic: orders.summary: ` +
      JSON.stringify(message.value);
    console.log(response);

    // const createProductDto: CreateProductDto = {
    //   id: 1,
    //   total: 3
    // }
    await this.productService.create(message.value)
    return response;
  }

  async receiveProductsData(message: any) {
    const response =
      `Receiving a new message from topic: products.summary: ` +
      JSON.stringify(message.value);
    console.log(response);
    return response;
  }

  async receiveTestData(message: any) {
    const response =
      `Receiving a new message from topic: test: ` +
      JSON.stringify(message.value);
    console.log(response);
    return response;
  }
}
