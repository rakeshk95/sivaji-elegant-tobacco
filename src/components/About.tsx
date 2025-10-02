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
          


         
          
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 w-full max-w-full overflow-hidden">

        {/* About Content with Photos Side by Side */}
        <div className="max-w-6xl mx-auto mb-12 md:mb-20">
          <div className="bg-white rounded-2xl p-4 md:p-8 lg:p-10 xl:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-start">
              {/* Left Side - Content */}
              <div className="text-gray-800">
                <p className="text-sm sm:text-base font-medium mb-4 md:mb-6 text-justify leading-6 md:leading-7 tracking-wide">
                  Sivaji Enterprises, headquartered in Ongole, Andhra Pradesh, proudly serves clients across the globe. Over the years, we have built lasting relationships with a wide network of esteemed clientele, earning recognition as a trusted Manufacturer, Exporter, and Supplier of premium Tobacco Products.
                </p>
                
                <p className="text-sm sm:text-base font-medium mb-4 md:mb-6 text-justify leading-6 md:leading-7 tracking-wide">
                  Since 1990, we have remained dedicated to meeting the diverse needs of cigarette manufacturers. Under the able leadership of Mr. Venkateswarlu, Managing Director, whose vision and more than 35 years of industry expertise continue to guide our growth, Sivaji Enterprises has upheld a tradition of excellence, consistency, and reliability.
                </p>
                
                <p className="text-sm sm:text-base font-medium text-justify leading-6 md:leading-7 tracking-wide">
                  At Sivaji Enterprises, quality is more than a priority—it is our promise. Our plantations are carefully managed to produce high-grade tobacco of superior standards. Every product is rigorously tested in our state-of-the-art in-house laboratory to ensure precise nicotine concentration, exceptional leaf texture, and other desirable characteristics. This unwavering commitment to quality ensures that our customers receive nothing but the very best.
                </p>
              </div>

              {/* Right Side - Photos Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {/* Sivaji */}
                <div className="text-center">
                  <div className="relative inline-block mb-3 md:mb-4">
                    <img
                      src={sivajiImage}
                      alt="Rayapati Shivaji - Business Director"
                      className="w-full max-w-xs h-auto rounded-xl shadow-2xl border-4 border-yellow-500"
                    />
                    <div className="absolute -bottom-2 md:-bottom-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-yellow-500 text-black px-2 md:px-3 py-1 rounded-full text-xs font-bold">
                        BUSINESS DIRECTOR
                      </div>
                    </div>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1">RAYAPATI SHIVAJI</h4>
                </div>

                {/* Father */}
                <div className="text-center">
                  <div className="relative inline-block mb-3 md:mb-4">
                    <img
                      src={fatherImage}
                      alt="Rayapati Venkateswarlu - Founder"
                      className="w-full max-w-xs h-auto rounded-xl shadow-2xl border-4 border-yellow-500"
                    />
                    <div className="absolute -bottom-2 md:-bottom-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-yellow-500 text-black px-2 md:px-3 py-1 rounded-full text-xs font-bold">
                        FOUNDER
                      </div>
                    </div>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1">RAYAPATI VENKATESWARLU</h4>
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