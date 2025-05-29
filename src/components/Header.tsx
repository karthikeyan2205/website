import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useCart } from '@/hooks/use-cart';
import { signOut } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useAuth } from "@/hooks/use-auth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [signOutAnimating, setSignOutAnimating] = useState(false);
  const isMobile = useIsMobile();
  const { itemCount } = useCart();
  const user = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSignOut = async () => {
    setSignOutAnimating(true);
    setTimeout(async () => {
      await signOut(auth);
      setSignOutAnimating(false);
      navigate('/signin');
    }, 700);
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/categories', label: 'Categories' },
    { to: '/products', label: 'Products' },
    { to: '/contact', label: 'Contact' },
    { to: '/about', label: 'About' },
  ];

  return (
    <header className="sticky top-0 bg-white z-50 shadow-sm transition-shadow duration-300">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand with gradient and Exo font */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent"
          style={{
            fontFamily: '"Exo", sans-serif',
            fontOpticalSizing: 'auto',
            fontWeight: 700,
            fontStyle: 'normal',
            letterSpacing: '0.02em',
          }}
        >
          Quantum Dynamics
        </Link>

        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="transition-transform duration-300"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-7 w-7 animate-spin-slow text-primary" />
              ) : (
                <Menu className="h-7 w-7 text-primary" />
              )}
            </Button>
            {/* Animated mobile menu */}
            <div
              className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
              onClick={toggleMenu}
            />
            <ul
              className={`fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-8 z-50 transform transition-transform duration-300 ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <li className="mb-8">
                <Link
                  to="/"
                  className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent"
                  style={{ fontFamily: '"Exo", sans-serif', fontWeight: 700 }}
                  onClick={toggleMenu}
                >
                  Quantum Dynamics
                </Link>
              </li>
              {navLinks.map(link => (
                <li key={link.to} className="mb-6">
                  <Link
                    to={link.to}
                    onClick={toggleMenu}
                    className="block text-lg font-medium text-primary hover:text-secondary transition-colors duration-200 relative group"
                  >
                    <span className="group-hover:underline group-hover:underline-offset-4">{link.label}</span>
                  </Link>
                </li>
              ))}
              <li className="border-t pt-4 mt-6">
                {user ? (
                  <div className="flex items-center gap-2 mt-4">
                    <Link
                      to="/profile"
                      className="flex items-center gap-2"
                      onClick={toggleMenu}
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src="/images/csk.jpeg"
                        alt="User Logo"
                        className="h-8 w-8 rounded-full object-cover"
                      />
                      <span className="font-semibold">{user.displayName || user.email}</span>
                    </Link>
                    <button
                      className={`ml-2 px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition-all duration-700 ${
                        signOutAnimating ? 'opacity-50 scale-95' : ''
                      }`}
                      onClick={handleSignOut}
                      disabled={signOutAnimating}
                    >
                      {signOutAnimating ? "Signing Out..." : "Sign Out"}
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/signin"
                    className="block py-2 text-secondary flex items-center gap-2"
                    onClick={toggleMenu}
                  >
                    <UserCircle className="h-5 w-5" />
                    Sign In
                  </Link>
                )}
              </li>
              <li className="mt-6">
                <Link to="/cart" className="flex items-center gap-2" onClick={toggleMenu}>
                  <ShoppingCart className="h-6 w-6" />
                  Cart
                  {itemCount > 0 && (
                    <span className="ml-1 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                      {itemCount}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </>
        ) : (
          <div className="flex items-center gap-8">
            <nav>
              <ul className="flex gap-6">
                {navLinks.map(link => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-foreground hover:text-secondary transition-colors duration-200 relative group"
                    >
                      <span className="group-hover:underline group-hover:underline-offset-4 transition-all duration-200">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-6">
              {user ? (
                <>
                  <Link
                    to="/profile"
                    className="flex items-center gap-2"
                    style={{ textDecoration: "none" }}
                  >
                    <img
                      src="/images/csk.jpeg"
                      alt="User Logo"
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <span className="font-semibold">{user?.displayName || user?.email}</span>
                  </Link>
                  <button
                    className={`ml-2 px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition-all duration-700 ${
                      signOutAnimating ? 'opacity-50 scale-95' : ''
                    }`}
                    onClick={handleSignOut}
                    disabled={signOutAnimating}
                  >
                    {signOutAnimating ? "Signing Out..." : "Sign Out"}
                  </button>
                </>
              ) : (
                <Link
                  to="/signin"
                  className="block py-2 text-secondary flex items-center gap-2"
                >
                  <UserCircle className="h-5 w-5" />
                  Sign In
                </Link>
              )}
              <Link to="/cart" className="relative">
                <ShoppingCart className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;