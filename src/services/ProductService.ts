
import mongoClient from '@/utils/mongodb';
import { Product } from '@/types/product';

// Convert MongoDB product format to our application's Product type
const mapToProduct = (mongoProduct: any): Product => {
  return {
    id: mongoProduct._id,
    name: mongoProduct.name,
    price: mongoProduct.price,
    originalPrice: mongoProduct.originalPrice,
    description: mongoProduct.description,
    image: mongoProduct.image,
    category: mongoProduct.category,
    featured: mongoProduct.featured,
    rating: mongoProduct.rating,
    inStock: mongoProduct.inStock,
  };
};

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const mongoProducts = await mongoClient.getProducts();
    return mongoProducts.map(mapToProduct);
  } catch (error) {
    console.error('Error fetching products from MongoDB:', error);
    // Fallback to local data if MongoDB fails
    const { products } = await import('@/data/products');
    return products;
  }
};

export const getProductById = async (id: string): Promise<Product | undefined> => {
  try {
    const mongoProduct = await mongoClient.getProductById(id);
    return mongoProduct ? mapToProduct(mongoProduct) : undefined;
  } catch (error) {
    console.error(`Error fetching product ${id} from MongoDB:`, error);
    // Fallback to local data if MongoDB fails
    const { getProductById } = await import('@/data/products');
    return getProductById(id);
  }
};

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    const mongoProducts = await mongoClient.getProductsByCategory(category);
    return mongoProducts.map(mapToProduct);
  } catch (error) {
    console.error(`Error fetching products in category ${category} from MongoDB:`, error);
    // Fallback to local data if MongoDB fails
    const { getProductsByCategory } = await import('@/data/products');
    return getProductsByCategory(category);
  }
};

export const getFeaturedProducts = async (): Promise<Product[]> => {
  try {
    const allProducts = await mongoClient.getProducts();
    const featuredProducts = allProducts.filter(product => product.featured);
    return featuredProducts.map(mapToProduct);
  } catch (error) {
    console.error('Error fetching featured products from MongoDB:', error);
    // Fallback to local data if MongoDB fails
    const { getFeaturedProducts } = await import('@/data/products');
    return getFeaturedProducts();
  }
};

export const getAllCategories = async (): Promise<string[]> => {
  try {
    const products = await mongoClient.getProducts();
    return [...new Set(products.map(product => product.category))];
  } catch (error) {
    console.error('Error fetching categories from MongoDB:', error);
    // Fallback to local data if MongoDB fails
    const { getAllCategories } = await import('@/data/products');
    return getAllCategories();
  }
};
