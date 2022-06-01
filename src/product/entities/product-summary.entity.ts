import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class ProductSummary {  
  @Field(() => Int)  
  id: number;  

  @Field(() => Int)
  total: number;  

}
