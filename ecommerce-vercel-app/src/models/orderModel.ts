import mongoose, { Schema, Document } from 'mongoose';

interface IOrder extends Document {
  userId: string;
  products: { productId: string; quantity: number }[];
  totalAmount: number;
  orderDate: Date;
  status: string;
}

const orderSchema: Schema = new Schema({
  userId: { type: String, required: true },
  products: [
    {
      productId: { type: String, required: true },
      quantity: { type: Number, required: true }
    }
  ],
  totalAmount: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
  status: { type: String, default: 'Pending' }
});

const OrderModel = mongoose.model<IOrder>('Order', orderSchema);

export default OrderModel;