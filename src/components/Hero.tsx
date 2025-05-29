
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-down">
            Shop the Latest Trends
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in-up">
            Discover our curated collection of premium products at unbeatable prices. 
            Free shipping on orders over $50.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg animate-scale-in"
            >
              <Link to="/products">Shop Now</Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Link to="/categories">Explore Categories</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-pattern opacity-10 animate-fade-in"></div>
      <div className="hidden md:block absolute -bottom-10 right-10 w-64 h-64 bg-accent rounded-full opacity-20 blur-3xl animate-bounce"></div>
      
      {/* Hero image */}
      <div className="hidden lg:block absolute top-1/2 right-10 transform -translate-y-1/2 w-1/3 animate-fade-in">
        <img 
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" 
          alt="Shopping" 
          className="rounded-lg shadow-xl object-cover w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
