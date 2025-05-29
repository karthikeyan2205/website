import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/hooks/use-cart';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Trash, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';

const CartPage = () => {
  const { items, totalPrice, updateQuantity, removeItem, clearCart } = useCart();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <>
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
          
          {items.length > 0 ? (
            <div className="grid md:grid-cols-12 gap-8">
              <div className="md:col-span-8">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="hidden md:grid grid-cols-12 text-sm font-medium pb-4 border-b">
                    <div className="col-span-6">Product</div>
                    <div className="col-span-2 text-center">Price</div>
                    <div className="col-span-2 text-center">Quantity</div>
                    <div className="col-span-2 text-right">Total</div>
                  </div>
                  
                  <div className="space-y-6 mt-4">
                    {items.map((item) => (
                      <div key={item.product.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 py-4">
                        <div className="col-span-6 flex gap-4">
                          <Link to={`/product/${item.product.id}`}>
                            <img 
                              src={item.product.image} 
                              alt={item.product.name} 
                              className="w-20 h-20 object-cover rounded"
                            />
                          </Link>
                          <div>
                            <Link to={`/product/${item.product.id}`} className="font-medium hover:text-secondary">
                              {item.product.name}
                            </Link>
                            <p className="text-sm text-muted-foreground mt-1">{item.product.category}</p>
                          </div>
                        </div>
                        
                        <div className="md:col-span-2 flex items-center md:justify-center">
                          <span className="md:hidden mr-2 text-muted-foreground">Price:</span>
                          <span>${item.product.price.toFixed(2)}</span>
                        </div>
                        
                        <div className="md:col-span-2 flex items-center md:justify-center">
                          <div className="flex items-center border rounded">
                            <button 
                              className="px-2 py-1 hover:bg-muted transition" 
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.product.id, Number(e.target.value))}
                              className="w-12 text-center focus:outline-none"
                            />
                            
                            <button 
                              className="px-2 py-1 hover:bg-muted transition" 
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                        
                        <div className="md:col-span-2 flex items-center justify-between md:justify-end">
                          <span className="md:hidden text-muted-foreground">Total:</span>
                          <div className="flex items-center">
                            <span className="font-medium mr-4">${(item.product.price * item.quantity).toFixed(2)}</span>
                            <button 
                              onClick={() => removeItem(item.product.id)}
                              className="text-red-500 hover:text-red-700 transition"
                            >
                              <Trash className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between mt-6 pt-4 border-t">
                    <Button 
                      variant="outline"
                      onClick={() => clearCart()}
                    >
                      Clear Cart
                    </Button>
                    <Button asChild variant="link">
                      <Link to="/products">Continue Shopping</Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-4">
                <div className="bg-white rounded-lg shadow p-6 sticky top-24">
                  <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Subtotal ({items.length} items)</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${(totalPrice * 0.1).toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="flex justify-between font-medium text-lg mb-6">
                    <span>Total</span>
                    <span>${(totalPrice + totalPrice * 0.1).toFixed(2)}</span>
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      className="w-full"
                      variant="secondary"
                      onClick={handleCheckout}
                    >
                      Proceed to Checkout
                    </Button>
                    
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t"></span>
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-muted-foreground">or</span>
                      </div>
                    </div>
                    
                    <div className="bg-muted p-4 rounded text-sm">
                      <h3 className="font-medium mb-2">Have a promo code?</h3>
                      <div className="flex">
                        <Input placeholder="Enter code" className="rounded-r-none" />
                        <Button variant="outline" className="rounded-l-none">Apply</Button>
                      </div>
                    </div>
                    
                    <div className="text-muted-foreground text-xs text-center">
                      Demo Store: No actual purchases will be made.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg shadow">
              <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="h-8 w-8 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">Looks like you haven't added any products to your cart yet.</p>
              <Button asChild>
                <Link to="/products">Start Shopping</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
