import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class OrderSummary {  
  @Field(() => Int)  
  count: number;  

  @Field(() => Float)
  total: number;  

}
