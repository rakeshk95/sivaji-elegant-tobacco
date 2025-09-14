import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "@/assets/WhatsApp Image 2025-09-14 at 09.02.03_452cd47f.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "TOBACCO VARIETIES", href: "/varieties" },
    { name: "FARM GRADES", href: "/farm-grades" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black border-b border-pink-200/20 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-20 h-16">
              <img 
                src={logoImage} 
                alt="Sivaji Enterprises Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white mb-0">SIVAJI ENTERPRISES</h1>
              <div className="flex flex-col">
                <div className="w-full h-px bg-white mt-0.5"></div>
                <span className="text-xs text-white/80 mt-0.5">Trusted Since 1990</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-bold transition-colors duration-200 ${
                  location.pathname === item.href
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
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
              className="text-white hover:bg-gray-800"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-700 bg-black">
            <div className="flex flex-col space-y-4 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-bold transition-colors duration-200 px-4 ${
                    location.pathname === item.href
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
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