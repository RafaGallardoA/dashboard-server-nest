import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { OrderSummary } from './entities/order-summary.entity';
import { ORDER } from '../common/models/models';

@Resolver(() => OrderSummary)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}
  
  @Query(() => OrderSummary, ORDER)
  async findAll() {    
    return await this.orderService.findAll();
  }  
}
