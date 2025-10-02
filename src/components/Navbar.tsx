import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "@/assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "TOBACCO VARIETIES", href: "/varieties" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black border-b border-pink-200/20 z-50 w-screen">
      <div className="container mx-auto px-2 md:px-4 overflow-hidden max-w-full">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center hover-scale">
            <div className="flex items-center justify-center w-56 md:w-80 h-20 md:h-24 animate-scale-in">
              <img 
                src={logoImage} 
                alt="Sivaji Enterprises Logo" 
                className="w-full h-full object-contain max-w-full hover-glow"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 animate-slide-in-right">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-bold transition-all duration-300 text-lg lg:text-xl hover-scale ${
                  location.pathname === item.href
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-gray-800 p-2"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-700 bg-black">
            <div className="flex flex-col space-y-2 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-bold transition-colors duration-200 px-4 py-2 text-lg ${
                    location.pathname === item.href
                      ? "text-yellow-400 bg-gray-800"
                      : "text-white hover:text-yellow-400 hover:bg-gray-800"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;