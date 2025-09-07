import heroImage from "@/assets/metallic-3d-image-premium-expensive-260nw-2633654231.jpg";

const ContactInfo = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black">
      {/* Hero Image Section */}
      <div className="relative">
        <div
          className="h-[72vh] bg-cover bg-center bg-no-repeat w-full"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white">
              {/* Contact Icons */}
              <div className="flex justify-center space-x-8 mb-6">
                <div className="w-16 h-16 bg-gray-800 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className="w-16 h-16 bg-gray-800 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="w-16 h-16 bg-gray-800 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in drop-shadow-lg">
                CONTACT
              </h1>

              {/* Company Banner */}
              <div className="bg-yellow-500 px-8 py-4 rounded-lg mb-4 inline-block">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  SIVAJI ENTERPRISES
                </h2>
              </div>

              {/* Tagline */}
              <p className="text-lg md:text-xl font-semibold animate-fade-in drop-shadow-md">
                PRODUCT EXCELLENCE, DELIVERED 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Office Address Card */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Office Address</h3>
              <div className="text-gray-600 text-sm space-y-1">
                <p>SIVAJI ENTERPRISES</p>
                <p>MUKTHINUTHALAPADU</p>
                <p>ONGOLE, ANDHRA PRADESH</p>
                <p>523262</p>
              </div>
            </div>

            {/* Phone Number Card */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Phone Number</h3>
              <p className="text-gray-600 text-sm">8096112016</p>
            </div>

            {/* E-Mail Card */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">E Mail</h3>
              <p className="text-gray-600 text-sm">shivajibusiness392@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          {/* Contact Form */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-lg text-gray-600">
                We welcome your response and look forward to hearing from you
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-white border-2 border-yellow-500 rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-8">
                  <div className="w-1 h-8 bg-yellow-500 mr-4"></div>
                  <h3 className="text-2xl font-bold text-gray-800">Get in Touch with us</h3>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Enter Your Mail Id"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Enter Your Mobile Number"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Enter Your Subject"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                    />
                  </div>

                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors resize-none"
                  ></textarea>

                  <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-bold py-3 px-8 rounded-lg transition-colors duration-200"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">GET IN TOUCH WITH US</h2>
          <div className="w-full h-px bg-yellow-500 mb-6"></div>

          <p className="text-white mb-2">
            SIVAJI ENTERPRISES, MUKTHINUTHALAPADU, ONGOLE, ANDHRA PRADESH, 523262
          </p>
          <p className="text-white mb-4">
            8096112016, shivajibusiness392@gmail.com
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
