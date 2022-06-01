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
    const { id: orderId, total, count: productCount } = message.value;
    const orderDto: OrderDto = {
      orderId,
      total,
      productCount,
    }    

    await this.orderService.create(orderDto)
    
    return {
      done: true
    };
  }

  async receiveProductsData(message: any) {    
    const { id: productId, count: total } = message.value;
    const productDto: ProductDto = {
      productId,
      total,
    }    
    
    await this.productService.create(productDto)
    
    return {
      done: true
    };
  }

  async receiveTestData(message: any) {
    const response = `New Message in test: ` + JSON.stringify(message.value)
    console.log(response);

    return response;
  }
}
