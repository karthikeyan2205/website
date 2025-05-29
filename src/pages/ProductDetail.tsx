
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '@/data/products';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = id ? getProductById(id) : undefined;
  
  if (!product) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">Sorry, the product you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/products')}>
            Back to Products
          </Button>
        </div>
        <Footer />
      </>
    );
  }
  
  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <>
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <span className="text-amber-500">★</span>
                  <span className="ml-1">{product.rating}</span>
                </div>
                <span className="mx-2">|</span>
                <span className="text-green-600">{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
              </div>
              
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="ml-2 text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="ml-3 bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                )}
              </div>
              
              <p className="text-muted-foreground mb-8">{product.description}</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Quantity</h3>
                  <div className="flex items-center">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    >
                      -
                    </Button>
                    <span className="w-12 text-center">{quantity}</span>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => setQuantity(prev => prev + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                
                <Button
                  className="w-full py-6 text-lg"
                  onClick={handleAddToCart}
                  variant="secondary"
                  disabled={!product.inStock}
                >
                  <ShoppingBag className="mr-2 h-5 w-5" /> 
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
                
                <div className="border-t pt-6 space-y-4">
                  <div className="flex">
                    <div className="font-medium w-32">Category:</div>
                    <div>{product.category}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
