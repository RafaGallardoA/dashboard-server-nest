import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { OrderService } from '../order/order.service';
import { OrderDto } from '../order/dto/order.dto';
import { ProductDto } from '../product/dto/product.dto';
import { ProductService } from '../product/product.service';


@Injectable()
export class EventService {
  constructor(
    @Inject('ORDER_SERVICE') private readonly client: ClientKafka,
    private readonly productService: ProductService,
    private readonly orderService: OrderService
  ) {}

  async receiveOrdersData(message: any) {
    const response = `New Message in orders.summary: ` + JSON.stringify(message.value)      
    console.log(response);

    const orderDto: OrderDto = {
      orderId: 2,
      total: 4,
      productCount: 6,
    }
    await this.orderService.create(orderDto)
    // await this.orderService.create(message.value)
    return response;
  }

  async receiveProductsData(message: any) {
    const response = `New Message in products.summary: ` + JSON.stringify(message.value)
    console.log(response);

    const productDto: ProductDto = {
      productId: 6,
      total: 5
    }
    await this.productService.create(productDto)
    // await this.productService.create(message.value)
    return response;
  }

  async receiveTestData(message: any) {
    const response = `New Message in test: ` + JSON.stringify(message.value)
    console.log(response);

    return response;
  }
}
