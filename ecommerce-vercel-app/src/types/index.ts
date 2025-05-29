export interface Product {
  _id: string;
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

export interface Order {
  _id: string;
  products: Product[];
  totalAmount: number;
  orderDate: Date;
  userId: string;
  status: string;
}