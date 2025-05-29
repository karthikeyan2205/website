import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: String,
  fullName: String,
  email: String,
  items: [ 
    {
      productName: String,
      quantity: Number,
      price: Number,
      image: String, // Add image field for product image
    }
   ],
  total: Number,
  orderNumber: String,
  status: {
    type: String,
    enum: ['On the way', 'Delivered', 'Cancelled', 'Returned'],
    default: 'On the way',
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Order', orderSchema);