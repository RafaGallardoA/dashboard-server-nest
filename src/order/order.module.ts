import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './schema/order.schema';
import { ORDER } from '../common/models/models';

@Module({
  imports: [    
    MongooseModule.forFeatureAsync([
      {
        name: ORDER.name,
        useFactory: () => OrderSchema,
      },
    ]),  
  ],
  providers: [OrderService],  
  exports: [OrderService],
})
export class OrderModule { }