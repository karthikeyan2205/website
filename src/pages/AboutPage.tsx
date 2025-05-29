
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">About Quantum Dynamics</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in 2023, Quantum Dynamics started with a simple mission: to provide high-quality products 
                  with exceptional customer service. What began as a small online store has grown into a 
                  marketplace trusted by thousands of customers worldwide.
                </p>
                <p className="text-muted-foreground">
                  We pride ourselves on curating only the best products across various categories, ensuring 
                  that our customers receive items that meet our rigorous standards for quality and value.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  At Quantum Dynamics, we believe shopping should be easy, enjoyable, and accessible to everyone. 
                  Our mission is to create an online shopping experience that combines convenience with 
                  exceptional product offerings.
                </p>
                <p className="text-muted-foreground">
                  We're committed to sustainable practices, working with ethical suppliers, and reducing 
                  our environmental footprint while delivering the products you love.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Why Choose Quantum Dynamics?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card className="bg-muted">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Quality Assurance</h3>
                  <p className="text-sm">Every product goes through rigorous quality checks before being listed on our store.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-muted">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Customer Support</h3>
                  <p className="text-sm">Our support team is available 7 days a week to help with any questions or concerns.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-muted">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Secure Shopping</h3>
                  <p className="text-sm">Your data security is our priority, with encrypted transactions and secure payment methods.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-primary/10 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Team</h2>
            <p className="text-center max-w-3xl mx-auto mb-8">
              Quantum Dynamics is powered by a dedicated team of e-commerce specialists, product experts, and 
              customer service professionals who are passionate about creating the best shopping experience for you.
            </p>
            <div className="text-center">
              <p className="font-medium">Want to join our team?</p>
              <p className="text-muted-foreground">Visit our Careers page or contact us at careers@Quantum Dynamics.example.com</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
