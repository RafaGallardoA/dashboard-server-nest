export interface IOrder extends Document {
  orderId: number;
  total: number;
  productCount: number;
}