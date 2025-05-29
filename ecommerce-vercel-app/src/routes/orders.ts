import { Router } from 'express';
import * as OrdersController from '../controllers/ordersController';
import { Request, Response } from 'express';

const router = Router();

export function setOrdersRoutes(app: Router) {
  app.post('/orders', OrdersController.createOrder);
  app.post('/orders', OrdersController.createOrder);
  app.get('/orders', OrdersController.getOrderHistory);
  app.get('/api/orders/user/:userId', OrdersController.getOrderHistoryByUser);
  }

  interface OrderItem {
    productId: string;
    quantity: number;
    price: number;
  }

  interface CreateOrderRequestBody {
    userId: string;
    items: OrderItem[];
    total: number;
  }

  interface Order extends CreateOrderRequestBody {
    id: string;
    createdAt: Date;
  }


  export async function createOrder(
    req: Request<unknown, unknown, CreateOrderRequestBody>,
    res: Response
  ): Promise<void> {
    try {
      const { userId, items, total } = req.body;
      if (!userId || !Array.isArray(items) || typeof total !== 'number') {
        res.status(400).json({ message: 'Invalid order data.' });
        return;
      }

      // Example: Save order to database (replace with actual DB logic)
      const newOrder: Order = {
        id: Date.now().toString(),
        userId,
        items,
        total,
        createdAt: new Date()
      };

      // Simulate DB save
      // await OrderModel.create(newOrder);

      res.status(201).json({ message: 'Order created successfully.', order: newOrder });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      res.status(500).json({ message: 'Failed to create order.', error: errorMessage });
    }
  }