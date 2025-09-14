import heroImage from "@/assets/tobacco-field-2.jpg";
import sivajiImage from "@/assets/sivaji.jpeg";
import fatherImage from "@/assets/Sivajji_father.jpeg";

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-gray-900 to-black w-full max-w-full overflow-hidden">
      {/* Hero Image Section - Full Screen */}
      <div className="relative">
        <div 
          className="h-[72vh] bg-cover bg-center bg-no-repeat w-full"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Blinking Company Name at Top */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-black/50 px-3 py-2 rounded-lg mx-auto inline-block max-w-[80vw]">
              <h1 className="text-lg md:text-xl font-bold text-white animate-enhanced-pulse drop-shadow-lg">
                SIVAJI <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">ENTERPRISES</span>
              </h1>
            </div>
          </div>
          
          {/* About Us Heading in Center */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="text-center text-white group cursor-pointer">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in drop-shadow-lg transition-all duration-700 group-hover:text-yellow-400 group-hover:scale-105 group-hover:drop-shadow-2xl animate-slide-up">
                ABOUT US
              </h1>
              <p className="text-lg text-yellow-400 font-semibold animate-fade-in drop-shadow-md transition-all duration-700 group-hover:text-yellow-300 group-hover:scale-105 animate-slide-up-delay">
                LEADING TOBACCO GROWER, PACKER & EXPORTER
              </p>
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg -m-4"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 w-full max-w-full overflow-hidden">

        {/* About Content with Photos Side by Side */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-white rounded-2xl p-8 md:p-10 lg:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-start">
              {/* Left Side - Content */}
              <div className="text-gray-800">
                <p className="text-base font-medium mb-6 text-justify leading-7 tracking-wide">
                  Sivaji Enterprises, headquartered in Ongole, Andhra Pradesh, proudly serves clients across the globe. Over the years, we have built lasting relationships with a wide network of esteemed clientele, earning recognition as a trusted Manufacturer, Exporter, and Supplier of premium Tobacco Products.
                </p>
                
                <p className="text-base font-medium mb-6 text-justify leading-7 tracking-wide">
                  Since 1990, we have remained dedicated to meeting the diverse needs of cigarette manufacturers. Under the able leadership of Mr. Venkateswarlu, Managing Director, whose vision and more than 35 years of industry expertise continue to guide our growth, Sivaji Enterprises has upheld a tradition of excellence, consistency, and reliability.
                </p>
                
                <p className="text-base font-medium text-justify leading-7 tracking-wide">
                  At Sivaji Enterprises, quality is more than a priority—it is our promise. Our plantations are carefully managed to produce high-grade tobacco of superior standards. Every product is rigorously tested in our state-of-the-art in-house laboratory to ensure precise nicotine concentration, exceptional leaf texture, and other desirable characteristics. This unwavering commitment to quality ensures that our customers receive nothing but the very best.
                </p>
              </div>

              {/* Right Side - Photos Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Sivaji */}
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <img
                      src={sivajiImage}
                      alt="Rayapati Shivaji - Business Director"
                      className="w-full max-w-xs h-auto rounded-xl shadow-2xl border-4 border-yellow-500"
                    />
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                        BUSINESS DIRECTOR
                      </div>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">RAYAPATI SHIVAJI</h4>
                </div>

                {/* Father */}
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <img
                      src={fatherImage}
                      alt="Rayapati Venkateswarlu - Founder"
                      className="w-full max-w-xs h-auto rounded-xl shadow-2xl border-4 border-yellow-500"
                    />
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                        FOUNDER
                      </div>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">RAYAPATI VENKATESWARLU</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;