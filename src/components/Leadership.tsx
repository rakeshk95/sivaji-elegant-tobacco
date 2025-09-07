import sivajiImage from "@/assets/sivaji.jpeg";
import fatherImage from "@/assets/Sivajji_father.jpeg";

const Leadership = () => {
  return (
    <section id="leadership" className="py-24 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-3 rounded-full text-sm font-bold mb-2 shadow-lg">
            OUR TEAM
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 tracking-wide">
            LEADERSHIP
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
        </div>

        {/* Leadership Grid */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Founder Section */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <p className="text-orange-600 italic text-lg leading-normal mb-6">
                At Sivaji Enterprises, our mission is simple — to bring you the finest selection of tobacco products with authenticity, quality, and care at the heart of everything we do. We are passionate about premium tobacco and committed to delivering excellence in every product we offer.
              </p>
              <p className="text-orange-600 italic text-lg leading-normal mb-6">
                Our dedication to craftsmanship, heritage, and tradition ensures that our customers receive nothing but the best. We thank you for choosing Sivaji Enterprises and look forward to serving you with the highest quality tobacco products.
              </p>
              <div className="text-right">
                <span className="text-black font-bold text-xl">Sivaji</span>
              </div>
            </div>
          </div>

          {/* Founder Image */}
          <div className="order-1 lg:order-2">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">CEO & FOUNDER</h3>
              <div className="w-12 h-0.5 bg-yellow-500 mx-auto mb-6 rounded-full"></div>
              <div className="relative inline-block">
                <img
                  src={sivajiImage}
                  alt="Sivaji - CEO & Founder"
                  className="w-full max-w-xs h-auto rounded-lg shadow-lg border-2 border-yellow-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Business Director Section */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center mt-16">
          {/* Director Image */}
          <div className="order-1">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">BUSINESS DIRECTOR</h3>
              <div className="w-12 h-0.5 bg-yellow-500 mx-auto mb-6 rounded-full"></div>
              <div className="relative inline-block">
                <img
                  src={fatherImage}
                  alt="Business Director"
                  className="w-full max-w-xs h-auto rounded-lg shadow-lg border-2 border-yellow-500"
                />
              </div>
            </div>
          </div>

          {/* Director Content */}
          <div className="order-2">
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <p className="text-orange-600 italic text-lg leading-normal mb-6">
                As the Business Director at Sivaji Enterprises, I bring extensive experience in the tobacco industry. Throughout my career, I have led strategic initiatives that have driven growth, enhanced operational efficiency, and strengthened market positioning.
              </p>
              <p className="text-orange-600 italic text-lg leading-normal mb-6">
                My leadership is focused on fostering a collaborative team culture and delivering exceptional value to our clients and partners. I am committed to steering Sivaji Enterprises toward continued success and innovation in the industry and creating value for stakeholders.
              </p>
              <div className="text-right">
                <span className="text-black font-bold text-xl">Sivaji Father</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
