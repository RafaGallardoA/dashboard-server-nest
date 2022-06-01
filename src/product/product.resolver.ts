import { Resolver, Query } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { ProductSummary } from './entities/product-summary.entity';
import { PRODUCT_SUMMARY } from '../common/models/models';

@Resolver(() => ProductSummary)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}
  
  @Query(() => [ProductSummary], PRODUCT_SUMMARY)
  async findAll() {    
    return await this.productService.findAll();
  }  
}
