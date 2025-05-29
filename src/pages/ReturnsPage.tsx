
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Steps } from '@/components/ui/steps';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ReturnsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Returns & Exchanges</h1>
          
          <div className="bg-card rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Our Return Policy</h2>
            <p className="mb-4">We want you to be completely satisfied with your purchase. If you're not happy with your order, we offer a simple returns process.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-background p-4 rounded-lg border">
                <div className="text-primary font-bold text-2xl mb-2">30</div>
                <div className="font-medium">Day Returns</div>
                <div className="text-sm text-muted-foreground">From delivery date</div>
              </div>
              <div className="bg-background p-4 rounded-lg border">
                <div className="text-primary font-bold text-2xl mb-2">Free</div>
                <div className="font-medium">Return Shipping</div>
                <div className="text-sm text-muted-foreground">On eligible items</div>
              </div>
              <div className="bg-background p-4 rounded-lg border">
                <div className="text-primary font-bold text-2xl mb-2">Fast</div>
                <div className="font-medium">Refund Process</div>
                <div className="text-sm text-muted-foreground">Within 5-7 days</div>
              </div>
            </div>
          </div>
          
          <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-xl font-semibold mb-4">How to Return an Item</h2>
            <Steps 
              items={[
                { title: "Sign In", description: "Log into your account to access your orders" },
                { title: "Select Order", description: "Find the order containing the item you want to return" },
                { title: "Request Return", description: "Select the item(s) and reason for return" },
                { title: "Print Label", description: "Use our prepaid shipping label for free returns" },
                { title: "Ship Item", description: "Drop off the package at any shipping location" }
              ]}
            />
          </div>
          
          <div className="bg-muted p-6 rounded-lg mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-xl font-semibold mb-4">Return Conditions</h2>
            <p className="mb-3">To be eligible for a return, please make sure:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Item is unworn, unwashed, and unaltered</li>
              <li>Item has original tags attached</li>
              <li>Item is in original packaging</li>
              <li>Return is initiated within 30 days of delivery</li>
            </ul>
            <p className="mt-4 text-sm">Some items, such as intimate apparel, personal care products, and sale items marked as final sale cannot be returned.</p>
          </div>
          
          <div className="bg-card rounded-lg shadow-md p-6 mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-xl font-semibold mb-4">Exchanges</h2>
            <p>We offer exchanges for items in different sizes or colors, subject to availability. To request an exchange:</p>
            <ol className="list-decimal pl-5 my-3 space-y-2">
              <li>Initiate a return using the process above</li>
              <li>In the return form, select "Exchange" as your return option</li>
              <li>Select the desired replacement item, size, or color</li>
              <li>Ship your original item back to us</li>
              <li>We'll process your exchange as soon as we receive your return</li>
            </ol>
            <p className="text-sm">Please note that if the replacement item is a different price, you'll be charged or refunded the difference.</p>
          </div>
          
          <div className="text-center py-8 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
            <p className="mb-4">If you have any questions about our return policy or need assistance with a return, our customer service team is here to help.</p>
            <Button asChild className="mx-auto">
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReturnsPage;
