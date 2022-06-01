

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IProduct } from './dto/product.interface';
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
    const product = await this.findOne(productDto.productId);

    if (!product) {
      return await this.productModel.create(productDto);    
    }

    await this.productModel.updateOne(
      { productId: productDto.productId }, 
      { $inc: { total: productDto.total}})     
  }

  async findAll() {
    const products = await this.productModel.find();

    return products.map(this.convertToProductsSummary);
  }

  async findOne(id: number) {
    return this.productModel.findOne({ productId: id });
  }

  convertToProductsSummary({ productId, total }: { productId: number, total: number }) {
    return {
      id: productId,
      total: total,
    }
  }

}