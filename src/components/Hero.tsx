import heroImage from "@/assets/hero-tobacco-field.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 w-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Company Name - Better visibility */}
      <div className="absolute top-32 md:top-40 left-0 right-0 z-20 text-center px-4 animate-slide-in-left">
        <div className="bg-black/50 px-3 py-2 rounded-lg mx-auto inline-block max-w-[90vw] md:max-w-[80vw] hover-scale">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white animate-enhanced-pulse drop-shadow-lg font-montserrat">
            SIVAJI <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">ENTERPRISES</span>
          </h1>
        </div>
      </div>

      {/* Content - Better mobile positioning */}
      <div className="relative z-10 container mx-auto px-4 text-center mt-32 md:mt-48 w-screen overflow-hidden animate-slide-in-right">
        <div className="max-w-3xl mx-auto w-full">
          {/* Subheading - Better mobile text sizing */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-yellow-400 font-normal mb-4 md:mb-6 drop-shadow-md leading-tight animate-scale-in">
            FROM <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent font-black animate-enhanced-pulse">PRODUCER TO GLOBAL EXPORTER</span> OF TOBACCO
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white font-medium mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in drop-shadow-md hover-glow">
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
