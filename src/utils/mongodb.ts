// MongoDB client implementation for connecting to MongoDB Atlas
// In a production app, this would be handled by a backend service

import { Product } from '@/types/product';

interface MongoDBProduct {
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

interface MongoDBConnection {
  isConnected: boolean;
  connect: () => Promise<boolean>;
  disconnect: () => Promise<void>;
  getProducts: () => Promise<MongoDBProduct[]>;
  getProductById: (id: string) => Promise<MongoDBProduct | null>;
  getProductsByCategory: (category: string) => Promise<MongoDBProduct[]>;
}

// This is a frontend implementation that simulates MongoDB connection
// In a real app, you would use a backend API to connect to MongoDB
class MongoDBClient implements MongoDBConnection {
  private connected: boolean = false;
  private products: MongoDBProduct[] = [];
  private connectionString: string = '';

  constructor() {
    // Initialize with sample data from our existing products
    import('@/data/products').then(({ products }) => {
      this.products = products.map(p => ({
        _id: p.id,
        name: p.name,
        price: p.price,
        originalPrice: p.originalPrice,
        description: p.description,
        image: p.image,
        category: p.category,
        featured: p.featured,
        rating: p.rating,
        inStock: p.inStock
      }));
    });
    
    // No real MongoDB Atlas connection string is used in this frontend simulation
    this.connectionString = '';
    console.log('MongoDB client initialized with simulated connection');
  }

  get isConnected(): boolean {
    return this.connected;
  }

  async connect(): Promise<boolean> {
    // Simulate connection delay
    return new Promise((resolve) => {
      setTimeout(() => {
        this.connected = true;
        console.log('Connected to MongoDB Atlas (simulated)');
        resolve(true);
      }, 500);
    });
  }

  async disconnect(): Promise<void> {
    this.connected = false;
    console.log('Disconnected from MongoDB Atlas (simulated)');
  }

  async getProducts(): Promise<MongoDBProduct[]> {
    if (!this.connected) {
      await this.connect();
    }
    console.log('Fetching products from MongoDB (simulated)');
    return Promise.resolve(this.products);
  }

  async getProductById(id: string): Promise<MongoDBProduct | null> {
    if (!this.connected) {
      await this.connect();
    }
    console.log(`Fetching product ${id} from MongoDB (simulated)`);
    const product = this.products.find(p => p._id === id);
    return Promise.resolve(product || null);
  }

  async getProductsByCategory(category: string): Promise<MongoDBProduct[]> {
    if (!this.connected) {
      await this.connect();
    }
    console.log(`Fetching products in category ${category} from MongoDB (simulated)`);
    const filteredProducts = this.products.filter(p => p.category === category);
    return Promise.resolve(filteredProducts);
  }
}

// Create a singleton instance
const mongoClient = new MongoDBClient();

export default mongoClient;
