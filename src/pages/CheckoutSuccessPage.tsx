import { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, ShoppingBag } from 'lucide-react';

const CheckoutSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const orderNumber = searchParams.get("orderId") || `ORD-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
  
  

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  return (
    <>
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-green-100 p-4">
                <CheckCircle className="h-16 w-16 text-green-600" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
            <p className="text-green-700 text-lg font-semibold mb-2">
              Your cart has been successfully cleared.
            </p>
            <p className="text-muted-foreground text-lg mb-6">
              Your order has been received and is now being processed.
              We've sent a confirmation email with your order details.
            </p>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Order Information</h2>
              <div className="flex flex-col gap-2 text-left">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Order Number:</span>
                  <span className="font-medium">{orderNumber}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Date:</span>
                  <span className="font-medium">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Payment Status:</span>
                  <span className="font-medium text-green-600">Paid</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button asChild size="lg">
                <Link to="/">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Continue Shopping
                </Link>
              </Button>
              
              <Button asChild>
                <a href={`http://localhost:5000/api/invoice/${orderNumber}`} target="_blank" rel="noopener noreferrer">
                  Download Invoice
                </a>
              </Button>
              
              <p className="text-sm text-muted-foreground pt-4">
                If you have any questions about your order, please contact our customer support.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CheckoutSuccessPage;
