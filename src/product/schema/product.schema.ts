import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema(
  {
    productId: { type: Number, required: true },
    total: { type: Number, required: true },    
  },
  { timestamps: true },
);