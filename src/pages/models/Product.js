import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: [{ type: String }],
  stock: { type: Number, required: true },
  category: { type: String, required: true }, // e.g., electronics, clothing, accessories
}, { timestamps: true });

// Removed the obsolete Mongoose model for Product

export default mongoose.model('Product', productSchema);
