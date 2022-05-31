

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IProduct } from './product.interface';
import { CreateProductDto } from './create-product.dto';
import { Product } from './product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) { }
 
  async create(
    createProductDto: CreateProductDto,
  ): Promise<IProduct> {
    return await this.productModel.create(createProductDto);    
  }

}