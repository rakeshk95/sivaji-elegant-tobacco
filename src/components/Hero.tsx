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
      
      {/* Company Name - Better visibility */}
      <div className="absolute top-20 left-0 right-0 z-20 text-center">
        <div className="bg-black/50 px-6 py-3 rounded-lg mx-auto inline-block">
          <h1 className="text-2xl md:text-3xl font-bold text-white animate-pulse drop-shadow-lg">
            SIVAJI <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">ENTERPRISES</span>
          </h1>
        </div>
      </div>

      {/* Content - Moved further down */}
      <div className="relative z-10 container mx-auto px-4 text-center mt-48">
        <div className="max-w-4xl mx-auto">
          {/* Subheading - Larger */}
          <p className="text-2xl md:text-4xl text-white font-bold mb-6 animate-slide-in-right drop-shadow-md">
            FROM PRODUCER TO GLOBAL EXPORTER OF TOBACCO
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-white font-medium mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in drop-shadow-md">
            LEADING TOBACCO GROWER, PACKER & EXPORTER
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
