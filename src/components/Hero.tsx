import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Globe, Leaf, Star } from "lucide-react";
import heroImage from "@/assets/hero-tobacco-field.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image - Clean without overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Removed the gradient overlay to show clean image */}
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
         

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            SIVAJI
            <span className="block bg-gradient-to-r from-accent to-warning bg-clip-text text-transparent">
              ENTERPRISES
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-in-right">
            Excellence in Trading of Tobacco
          </p>

          {/* Description */}
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            PRODUCT EXCELLENCE, DELIVERED WORLDWIDE. We place a premium on meeting customer needs, 
            providing premium Tobacco products made from Tobacco. We are primarily concerned with 
            our customers' bottom lines.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button variant="hero" size="lg" className="group">
              Explore Our Varieties
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Get Quote Now
            </Button>
          </div>

          {/* Stats */}
       
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary-glow/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;