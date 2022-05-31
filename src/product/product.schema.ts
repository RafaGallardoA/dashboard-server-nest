import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ unique: true })
  id: number;
  
  @Prop()
  total: number;  
}

export const ProductSchema = SchemaFactory.createForClass(Product);