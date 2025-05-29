import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
  rating: number;
  inStock: boolean;
}

const productSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  featured: { type: Boolean, default: false },
  rating: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const ProductModel = mongoose.model<IProduct>('Product', productSchema);

export default ProductModel;