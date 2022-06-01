

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IOrder } from './dto/order.interface';
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

  async findAll() {    
    const [ordersTotal = { total:0, count:0 }] = await this.orderModel.aggregate([
      {
        $project: {
          total: 1,
        } 
      },
      {
        $group: {
          _id: "id",
          total: {
            $sum: "$total"
          },
          count: {
            $sum: 1
          }
        }
      }
    ]);    

    const { total, count } = ordersTotal;
    return {
      total,
      count
    }            
  }

  async findOne(id: number) {
    return this.orderModel.findOne({orderId:id});
  }

}