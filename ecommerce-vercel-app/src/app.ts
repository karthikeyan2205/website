import express from 'express';
import { json } from 'body-parser';
import { setProductsRoutes } from './routes/products';
import { setOrdersRoutes } from './routes/orders';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

setProductsRoutes(app);
setOrdersRoutes(app);

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error('MONGO_URI environment variable is not defined');
}

mongoose.connect(mongoUri, { /* options */ })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

export default app;