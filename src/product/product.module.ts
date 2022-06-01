import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schema/product.schema';
import { PRODUCT } from '../common/models/models';
import { ProductResolver } from './product.resolver';

@Module({
  imports: [    
    MongooseModule.forFeatureAsync([
      {
        name: PRODUCT.name,
        useFactory: () => ProductSchema,
      },
    ]),  
  ],
  providers: [ProductService, ProductResolver],  
  exports: [ProductService],
})
export class ProductModule { }