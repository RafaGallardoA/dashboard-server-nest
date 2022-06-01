import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema(
  {
    orderId: { type: Number, required: true, unique: true },
    total: { type: Number, required: true },    
    productCount: { type: Number, required: true },    
  },
  { timestamps: true },
);