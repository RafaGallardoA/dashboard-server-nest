import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { OrderService } from './order.service';
import { OrderSummary } from './entities/order-summary.entity';
import { ORDER_SUMMARY } from '../common/models/models';

@Resolver(() => OrderSummary)
export class OrderResolver {
  constructor(private readonly orderService: OrderService) {}
  
  @Query(() => OrderSummary, ORDER_SUMMARY)
  async findAll() {    
    return await this.orderService.findAll(); 
  }  
}
