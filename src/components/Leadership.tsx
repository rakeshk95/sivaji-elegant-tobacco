import sivajiImage from "@/assets/sivaji.jpeg";
import fatherImage from "@/assets/Sivajji_father.jpeg";

const Leadership = () => {
  return (
    <section id="leadership" className="py-24 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-6 lg:px-8">
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

        {/* Founder Section - Now First */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-start px-4 lg:px-0">
          {/* Founder Image */}
          <div className="order-1">
            <div className="text-center">
              <img
                src={fatherImage}
                alt="Rayapati Venkateswarlu - Founder"
                className="w-full max-w-xs h-auto rounded-lg shadow-lg border-2 border-yellow-500 mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">FOUNDER</h3>
              <div className="w-12 h-0.5 bg-yellow-500 mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Founder Section */}
          <div className="order-2 flex items-start">
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-xl w-full">
              <p className="text-orange-600 italic text-lg leading-normal mb-6">
                As the Founder of Sivaji Enterprises, I bring more than 35 years of expertise in the tobacco industry — spanning cultivation, processing, and exports. With a deep understanding of every leaf and every stage of its growth, my lifelong commitment has been to deliver premium-quality tobacco to customers worldwide.
              </p>
              <p className="text-orange-600 italic text-lg leading-normal mb-6">
                Over the decades, Sivaji Enterprises has exported millions of tons of tobacco to markets, earning a strong reputation for excellence, reliability, and trust. India's finest tobacco is cultivated in our own soils, nurtured with care, processed with precision, and delivered with uncompromising quality standards.
              </p>
              <p className="text-orange-600 italic text-lg leading-normal mb-6">
                Today, we are proud to be recognized as a trusted global brand. We remain committed to serving our customers with the best Indian tobacco — cultivated with tradition, perfected with expertise, and delivered worldwide.
              </p>
              <div className="text-right">
                <span className="text-black font-bold text-xl">Rayapati Venkateswarlu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Business Director Section - Now Second */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-16 px-4 lg:px-0">
          {/* Director Image */}
          <div className="order-1">
            <div className="text-center">
              <img
                src={sivajiImage}
                alt="Business Director"
                className="w-full max-w-xs h-auto rounded-lg shadow-lg border-2 border-yellow-500 mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">BUSINESS DIRECTOR</h3>
              <div className="w-12 h-0.5 bg-yellow-500 mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Director Content */}
          <div className="order-2 flex items-start">
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-xl w-full">
              <p className="text-orange-600 italic text-lg leading-normal mb-6">
                As the Business Director of Sivaji Enterprises, I work closely with our Founder to provide strategic direction and ensure that every decision aligns with our commitment to excellence. With a deep understanding of market demands and customer preferences, I strive to deliver the finest quality tobacco that meets global standards.
              </p>
              <p className="text-orange-600 italic text-lg leading-normal mb-6">
                Under my leadership, our team has strengthened its focus on international exports, ensuring that every product reflects the care and expertise for which Sivaji Enterprises is known. Cultivated in India's rich black and light soils, our tobacco is nurtured with precision and delivered with the highest level of quality to customers worldwide.
              </p>
              <div className="text-right">
                <span className="text-black font-bold text-xl">Rayapati Shivaji</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
