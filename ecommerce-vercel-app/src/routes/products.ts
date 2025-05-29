import { Router } from 'express';
import ProductsController from '../controllers/productsController';

const router = Router();
const productsController = new ProductsController();

export function setProductsRoutes(app: Router) {
  app.get('/api/products', productsController.getAllProducts.bind(productsController));
  app.get('/api/products/:id', productsController.getProductById.bind(productsController));
}