import heroImage from "@/assets/hero-tobacco-field.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
            SIVAJI <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">ENTERPRISES</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white font-semibold mb-6 animate-slide-in-right drop-shadow-md">
            Tobacco Trading with Excellence
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-white font-medium mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in drop-shadow-md">
            Crafting Products of Distinction, Delivered 
          </p>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary-glow/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;