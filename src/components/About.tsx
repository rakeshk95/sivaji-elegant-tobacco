import heroImage from "@/assets/tobacco-field-2.jpg";
import sivajiImage from "@/assets/sivaji.jpeg";
import fatherImage from "@/assets/Sivajji_father.jpeg";

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-gray-900 to-black">
      {/* Hero Image Section - Full Screen */}
      <div className="relative">
        <div 
          className="h-[72vh] bg-cover bg-center bg-no-repeat w-full"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in drop-shadow-lg">
                  ABOUT
                </h1>
                <div className="bg-yellow-500 px-8 py-4 rounded-lg mb-4 inline-block">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    SIVAJI ENTERPRISES
                  </h2>
                </div>
                <p className="text-lg md:text-xl font-semibold animate-fade-in drop-shadow-md">
                  PRODUCT EXCELLENCE, DELIVERED
                </p>
              </div>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">

        {/* About Content with Photos Side by Side */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="bg-white rounded-2xl p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
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
              <div className="grid grid-cols-2 gap-6">
                {/* Sivaji */}
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <img
                      src={sivajiImage}
                      alt="Sivaji - CEO & Founder"
                      className="w-full max-w-xs h-auto rounded-xl shadow-2xl border-4 border-yellow-500"
                    />
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                        CEO & FOUNDER
                      </div>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">SIVAJI</h4>
                  <p className="text-yellow-600 font-semibold text-sm">Managing Director</p>
                </div>

                {/* Father */}
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <img
                      src={fatherImage}
                      alt="Business Director"
                      className="w-full max-w-xs h-auto rounded-xl shadow-2xl border-4 border-yellow-500"
                    />
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                        BUSINESS DIRECTOR
                      </div>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">SIVAJI FATHER</h4>
                  <p className="text-yellow-600 font-semibold text-sm">Industry Expert</p>
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