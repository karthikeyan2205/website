
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-8 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quantum Dynamics</h3>
            <p className="text-sm opacity-80">
              Your one-stop destination for quality products at affordable prices. Shop with confidence!
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-sm opacity-80 hover:opacity-100 transition-opacity">All Products</Link></li>
              <li><Link to="/categories" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Categories</Link></li>
              <li><Link to="/products" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Deals & Offers</Link></li>
              <li><Link to="/products" className="text-sm opacity-80 hover:opacity-100 transition-opacity">New Arrivals</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Help Center</Link></li>
              <li><Link to="/shipping" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Shipping Information</Link></li>
              <li><Link to="/returns" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Returns & Exchanges</Link></li>
              <li><Link to="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Careers</Link></li>
              <li><Link to="/privacy" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">© {currentYear} Quantum Dynamics. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Facebook</a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Instagram</a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Twitter</a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
