

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IProduct } from '../common/interfaces/product.interface';
import { ProductDto } from './dto/product.dto';
import { PRODUCT } from '../common/models/models';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(PRODUCT.name) private readonly productModel: Model<IProduct>,
  ) { }
 
  async create(
    productDto: ProductDto,
  ): Promise<IProduct> {
    return await this.productModel.create(productDto);    
  }

}