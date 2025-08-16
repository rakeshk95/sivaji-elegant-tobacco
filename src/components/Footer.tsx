import { Button } from "@/components/ui/button";
import { Leaf, Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Tobacco Varieties", href: "#varieties" },
    { name: "Exports", href: "#exports" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    "Virginia Tobacco",
    "Burley Tobacco",
    "Dark Fire Cured",
    "Custom Processing",
    "Quality Testing",
    "Global Shipping"
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-lg">
                <Leaf className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Sivaji Enterprises</h3>
                <p className="text-primary-foreground/80">Premium Tobacco Trading</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/90 leading-relaxed max-w-md">
              Your trusted partner in premium tobacco trading since 1995. We deliver excellence 
              through superior quality products, cutting-edge facilities, and unmatched customer service.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+919160398999" className="hover:text-accent transition-colors duration-200">
                  +91 9160 398 999
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:sivajienterprises@gmail.com" className="hover:text-accent transition-colors duration-200">
                  sivajienterprises@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Andhra Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Products</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-primary-foreground/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-primary-foreground/80">
                Get the latest updates on tobacco market trends and our premium products.
              </p>
            </div>
            <Button 
              variant="hero" 
              size="lg"
              className="bg-accent hover:bg-accent/90"
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-primary-foreground/80 text-sm">
              <span>© 2024 Sivaji Enterprises. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-accent transition-colors duration-200">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-accent transition-colors duration-200">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-accent transition-colors duration-200">Quality Standards</a>
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;