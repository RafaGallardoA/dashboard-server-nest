import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Model, Document } from "mongoose";
import { CreateProductDto } from 'src/product/create-product.dto';
import { ProductService } from 'src/Product/product.service';


@Injectable()
export class EventService {
  constructor(@Inject('ORDER_SERVICE') private readonly client: ClientKafka, private readonly productService: ProductService) {}

  async receiveOrdersData(message: any) {
    const response =
      `Receiving a new message from topic: orders.summary: ` +
      JSON.stringify(message.value);
    console.log(response);

    const createProductDto: CreateProductDto = {
      id: 1,
      total: 3
    }
    await this.productService.create(createProductDto)
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
