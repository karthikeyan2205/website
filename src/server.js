import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userProfileRoutes from './routes/userProfile.js';
import productRoutes from './routes/product.js';
import orderRoutes from './routes/order.js';

const app = express();
app.use(cors({
  origin: [
    'http://localhost:8080',
    'http://localhost:5173',
    'http://127.0.0.1:8080',
    'http://127.0.0.1:5173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.options('*', cors());
app.use(express.json());

// Debugging middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

app.use('/api', userProfileRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);


mongoose.connect('mongodb+srv://karthi2205:Karthi@-2004@project1.fggv8eb.mongodb.net/?retryWrites=true&w=majority&appName=project1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(5000, () => console.log('Server running on port 5000'));
}).catch(err => console.error(err));