import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Globe, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-tobacco-field.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 tobacco-badge mb-6 animate-fade-in">
            <Leaf className="w-4 h-4" />
            <span>Since 1995 - Premium Quality Tobacco</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Excellence in{" "}
            <span className="bg-gradient-to-r from-accent to-warning bg-clip-text text-transparent">
              Trading of Tobacco
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-in-right">
            Premium Quality Products, Delivered Worldwide
          </p>

          {/* Description */}
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Sivaji Enterprises is your trusted partner in premium tobacco trading. 
            We deliver excellence through superior quality products, cutting-edge facilities, 
            and unmatched customer service.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button variant="hero" size="lg" className="group">
              Explore Our Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Learn About Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mx-auto mb-4">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">25+</h3>
              <p className="text-white/80">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mx-auto mb-4">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
              <p className="text-white/80">Countries Served</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mx-auto mb-4">
                <Leaf className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">1000+</h3>
              <p className="text-white/80">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary-glow/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;