
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategoryList from '@/components/CategoryList';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Premium Quality Products</h2>
              <p className="text-muted-foreground mb-8">
                We carefully source our products from trusted suppliers to ensure you get
                the best quality at competitive prices. Our team thoroughly tests each item
                to meet our strict standards before it reaches your hands.
              </p>
              <div className="flex flex-wrap justify-center gap-8 my-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">10k+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">1k+</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">5★</div>
                  <div className="text-sm text-muted-foreground">Reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CategoryList />
      </main>
      <Footer />
    </>
  );
};

export default Index;
