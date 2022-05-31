import { Document } from 'mongoose';

export interface IProduct extends Document {
  readonly id: number;
  readonly total: number;  
}