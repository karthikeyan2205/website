
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HelpCenterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6">Help Center</h1>
        
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-3">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mb-4">Get quick answers to common questions about products, orders, shipping, and returns.</p>
            <Button asChild variant="secondary">
              <Link to="/faq">View FAQs</Link>
            </Button>
          </div>
          
          <div className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-3">Contact Support</h2>
            <p className="text-muted-foreground mb-4">Need more help? Our customer support team is available 24/7 to assist you.</p>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        
        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl font-semibold">Popular Help Topics</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            {helpTopics.map((topic, index) => (
              <div 
                key={index} 
                className="bg-background p-4 rounded border hover:bg-accent/10 transition-colors"
              >
                <h3 className="font-medium mb-2">{topic.title}</h3>
                <p className="text-sm text-muted-foreground">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const helpTopics = [
  {
    title: "Order Tracking",
    description: "How to track your order status and shipping information"
  },
  {
    title: "Returns & Exchanges",
    description: "Our policies and processes for returning or exchanging items"
  },
  {
    title: "Payment Issues",
    description: "Troubleshooting common payment problems and questions"
  },
  {
    title: "Account Management",
    description: "How to update your account details and preferences"
  },
  {
    title: "Shipping Information",
    description: "Details about shipping methods, times, and costs"
  },
  {
    title: "Product Support",
    description: "Get help with specific products you've purchased"
  }
];

export default HelpCenterPage;
