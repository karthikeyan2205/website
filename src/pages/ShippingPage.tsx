
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const ShippingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Shipping Information</h1>
          
          <div className="bg-card rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Our Shipping Promise</h2>
            <p className="mb-4">At Quantum Dynamics, we're committed to delivering your orders quickly, safely, and affordably. We offer various shipping options to meet your needs.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-background p-4 rounded-lg border">
                <div className="text-primary font-bold text-2xl mb-2">Free</div>
                <div className="font-medium">Standard Shipping</div>
                <div className="text-sm text-muted-foreground">On orders over $50</div>
              </div>
              <div className="bg-background p-4 rounded-lg border">
                <div className="text-primary font-bold text-2xl mb-2">3-5</div>
                <div className="font-medium">Business Days</div>
                <div className="text-sm text-muted-foreground">For standard delivery</div>
              </div>
              <div className="bg-background p-4 rounded-lg border">
                <div className="text-primary font-bold text-2xl mb-2">1-2</div>
                <div className="font-medium">Business Days</div>
                <div className="text-sm text-muted-foreground">For express delivery</div>
              </div>
            </div>
          </div>
          
          <Accordion type="single" collapsible className="w-full mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <AccordionItem value="shipping-methods">
              <AccordionTrigger>Shipping Methods</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Standard Shipping - $4.99</h3>
                    <p className="text-muted-foreground">Delivery in 3-5 business days. Free on orders over $50.</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Express Shipping - $9.99</h3>
                    <p className="text-muted-foreground">Delivery in 1-2 business days.</p>
                  </div>
                  <div>
                    <h3 className="font-medium">Next Day Delivery - $14.99</h3>
                    <p className="text-muted-foreground">Order by 12pm for delivery the next business day.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="international-shipping">
              <AccordionTrigger>International Shipping</AccordionTrigger>
              <AccordionContent>
                <p className="mb-3">We ship to over 100 countries worldwide. International shipping rates and delivery times vary by location:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Canada & Mexico: 5-7 business days</li>
                  <li>Europe: 7-10 business days</li>
                  <li>Asia Pacific: 10-14 business days</li>
                  <li>Rest of World: 14-21 business days</li>
                </ul>
                <p className="mt-3 text-sm">Note: International orders may be subject to customs fees and import duties.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="tracking">
              <AccordionTrigger>Order Tracking</AccordionTrigger>
              <AccordionContent>
                <p>Once your order ships, you'll receive a confirmation email with tracking information. You can also track your order by:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Logging into your account and viewing your order history</li>
                  <li>Using the tracking number in your shipping confirmation email</li>
                  <li>Contacting our customer service team</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="bg-muted p-6 rounded-lg animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-xl font-semibold mb-4">Shipping Restrictions</h2>
            <p className="mb-4">Some products may have shipping restrictions based on regulations or product characteristics:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Hazardous materials may require special shipping arrangements</li>
              <li>Certain products cannot be shipped to international destinations</li>
              <li>Some remote locations may require additional shipping time and fees</li>
            </ul>
            <p className="mt-4 text-sm">For specific questions about shipping to your location, please <a href="/contact" className="text-primary underline">contact our support team</a>.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShippingPage;
