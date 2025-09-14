import heroImage from "@/assets/hero-tobacco-field.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-16 w-screen">
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
        <div className="bg-black/50 px-3 py-2 rounded-lg mx-auto inline-block max-w-[80vw]">
          <h1 className="text-lg md:text-xl font-bold text-white animate-enhanced-pulse drop-shadow-lg">
            SIVAJI <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">ENTERPRISES</span>
          </h1>
        </div>
      </div>

      {/* Content - Moved further down */}
      <div className="relative z-10 container mx-auto px-2 text-center mt-48 w-screen overflow-hidden">
        <div className="max-w-3xl mx-auto w-full">
          {/* Subheading - Larger */}
          <p className="text-base md:text-xl text-yellow-400 font-bold mb-6 animate-pulse drop-shadow-md">
            FROM PRODUCER TO GLOBAL EXPORTER OF TOBACCO
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-white font-medium mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in drop-shadow-md">
            LEADING TOBACCO GROWER, PACKER & EXPORTER
          </p>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-2 w-16 h-16 bg-accent/20 rounded-full animate-float hidden md:block"></div>
      <div className="absolute bottom-20 right-2 w-12 h-12 bg-primary-glow/20 rounded-full animate-float hidden md:block" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;
