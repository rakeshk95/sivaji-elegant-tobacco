import heroImage from "@/assets/tobacco-field-2.jpg";

const ContactInfo = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black w-full max-w-full overflow-hidden">
      {/* Hero Image Section */}
      <div className="relative">
        <div
          className="h-[72vh] bg-cover bg-center bg-no-repeat w-full"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Blinking Company Name at Top */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-black/50 px-3 py-2 rounded-lg mx-auto inline-block max-w-[80vw]">
              <h1 className="text-lg md:text-xl font-bold text-white animate-enhanced-pulse drop-shadow-lg font-montserrat">
                SIVAJI <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">ENTERPRISES</span>
              </h1>
            </div>
          </div>
          
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white group cursor-pointer">
              {/* Contact Icons */}
              <div className="flex justify-center space-x-4 mb-6 animate-slide-up">
                <div className="w-16 h-16 bg-gray-800 rounded-full border-2 border-white flex items-center justify-center hover:scale-110 hover:border-yellow-400 transition-all duration-500">
                  <svg className="w-8 h-8 text-white hover:text-yellow-400 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className="w-16 h-16 bg-gray-800 rounded-full border-2 border-white flex items-center justify-center hover:scale-110 hover:border-yellow-400 transition-all duration-500">
                  <svg className="w-8 h-8 text-white hover:text-yellow-400 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="w-16 h-16 bg-gray-800 rounded-full border-2 border-white flex items-center justify-center hover:scale-110 hover:border-yellow-400 transition-all duration-500">
                  <svg className="w-8 h-8 text-white hover:text-yellow-400 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in drop-shadow-lg transition-all duration-700 group-hover:text-yellow-400 group-hover:scale-105 group-hover:drop-shadow-2xl animate-slide-up-delay">
                CONTACT
              </h1>

              {/* Tagline */}
              <p className="text-lg md:text-xl font-semibold animate-fade-in drop-shadow-md transition-all duration-700 group-hover:text-yellow-300 group-hover:scale-105 animate-slide-up-delay-2">
                LEADING TOBACCO GROWER, PACKER & EXPORTER
              </p>
              
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg -m-4"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="bg-gradient-to-br from-green-50 to-yellow-50 py-20 w-full max-w-full overflow-hidden">
        <div className="container mx-auto px-6 w-full max-w-full">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with Sivaji Enterprises for premium tobacco products and exceptional service
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
            {/* Office Address Card */}
            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-300">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Office Address</h3>
              </div>
              <div className="text-gray-600 space-y-2">
                <p className="font-semibold text-gray-800">SIVAJI ENTERPRISES</p>
                <p>MUKTHINUTHALAPADU</p>
                <p>ONGOLE, ANDHRA PRADESH</p>
                <p className="font-semibold">523262</p>
              </div>
            </div>

            {/* Phone Number Card */}
            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-yellow-300">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Phone Number</h3>
              </div>
              <div className="text-gray-600">
                <p className="text-lg font-semibold text-gray-800">+918096112016</p>
                <p className="text-sm mt-1">Available 24/7 for your inquiries</p>
              </div>
            </div>

            {/* E-Mail Card */}
            <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-300 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">E-Mail</h3>
              </div>
              <div className="text-gray-600">
                <p className="text-lg font-semibold text-gray-800">shivajibusiness392@gmail.com</p>
                <p className="text-sm mt-1">We respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20 w-full max-w-full overflow-hidden">
        <div className="container mx-auto px-6 w-full max-w-full">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-gray-800 mb-3">Send Us a Message</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We welcome your response and look forward to hearing from you. Get in touch for inquiries about our premium tobacco products.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
              {/* Contact Form */}
              <div className="bg-white rounded-3xl shadow-2xl p-4 md:p-6 lg:p-8 border border-gray-100">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-2 h-10 bg-gradient-to-b from-green-500 to-yellow-500 rounded-full mr-3"></div>
                    <h3 className="text-2xl font-bold text-gray-800">Get in Touch</h3>
                  </div>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
                </div>

                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 hover:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        placeholder="Enter Your Mail Id"
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 hover:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="Enter Your Mobile Number"
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 hover:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                      <input
                        type="text"
                        placeholder="Enter Your Subject"
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 bg-gray-50 hover:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your requirements..."
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 resize-none bg-gray-50 hover:bg-white"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Additional Info */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-500 to-yellow-500 rounded-3xl p-4 md:p-6 text-white">
                  <h3 className="text-2xl font-bold mb-3">Why Choose Us?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Premium Quality Tobacco Products
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Fast and Reliable Delivery
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Expert Customer Support
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      Competitive Pricing
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Business Hours</h3>
                  <div className="space-y-1 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-semibold">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded-xl">
                    <p className="text-sm text-green-700 font-semibold">
                      📞 Emergency inquiries available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-slate-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">GET IN TOUCH WITH US</h2>
          <div className="w-full h-px bg-yellow-500 mb-6"></div>

          <p className="text-white mb-2">
            SIVAJI ENTERPRISES, MUKTHINUTHALAPADU, ONGOLE, ANDHRA PRADESH, 523262
          </p>
          <p className="text-white mb-4">
           +918096112016, shivajibusiness392@gmail.com
          </p>

          <div className="w-full h-px bg-yellow-500 mb-6"></div>

          <p className="text-white text-sm leading-relaxed max-w-4xl mx-auto mb-6">
            You accept these terms of service, all applicable laws and regulations, and the responsibility for adhering to any local laws by accessing the website at <strong className="text-yellow-400">sivajienterprises.com</strong>. You are not permitted to use or access this website if you disagree with any of these terms. The website simply uses the photographs for representational purposes. This website's content is shielded by relevant copyright and trademark laws.
          </p>

          <div className="text-yellow-400 text-sm">
            All Rights Reserved © 2024 sivajienterprises.com
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactInfo;
