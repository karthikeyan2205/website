import { Request, Response } from 'express';
import ProductModel from '../models/productModel';

class ProductsController {
  async getAllProducts(req: Request, res: Response): Promise<void> {
    try {
      const products = await ProductModel.findAll();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products', error });
    }
  }

  async getProductById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const product = await ProductModel.findById(id);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error fetching product', error });
    }
  }
}

export default new ProductsController();