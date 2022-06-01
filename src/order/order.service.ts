

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IOrder } from '../common/interfaces/order.interface';
import { OrderDto } from './dto/order.dto';
import { ORDER } from '../common/models/models';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(ORDER.name) private readonly orderModel: Model<IOrder>,
  ) { }
 
  async create(
    orderDto: OrderDto,
  ): Promise<IOrder> {
    return await this.orderModel.create(orderDto);    
  }

}