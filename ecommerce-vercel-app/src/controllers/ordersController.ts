import { Request, Response } from 'express';
import OrderModel from '../models/orderModel';

class OrdersController {
  async createOrder(req: Request, res: Response): Promise<Response> {
    try {
      const orderData = req.body;
      const newOrder = await OrderModel.create(orderData);
      return res.status(201).json(newOrder);
    } catch (error) {
      return res.status(500).json({ message: 'Error creating order', error });
    }
  }

  async getOrderHistory(req: Request, res: Response): Promise<Response> {
    try {
      const userId = req.params.userId;
      const orders = await OrderModel.find({ userId });
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching order history', error });
    }
  }
}

export default new OrdersController();

export function createOrder(arg0: string, createOrder: any) {
  throw new Error('Function not implemented.');
}
export function getOrderHistory(arg0: string, getOrderHistory: any) {
  throw new Error('Function not implemented.');
}

export function getOrderHistoryByUser(arg0: string, getOrderHistoryByUser: any) {
  throw new Error('Function not implemented.');
}

