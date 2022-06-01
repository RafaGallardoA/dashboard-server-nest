import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './schema/order.schema';
import { ORDER } from '../common/models/models';
import { OrderResolver } from './order.resolver';

@Module({
  imports: [    
    MongooseModule.forFeatureAsync([
      {
        name: ORDER.name,
        useFactory: () => OrderSchema,
      },
    ]),  
  ],
  providers: [OrderService, OrderResolver],  
  exports: [OrderService],
})
export class OrderModule { }