const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Main Heading */}
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">GET IN TOUCH WITH US</h2>
        <div className="w-full h-px bg-yellow-500 mb-6"></div>

        {/* Contact Details */}
        <div className="mb-6">
          <p className="text-white mb-2">
            SIVAJI ENTERPRISES, MUKTHINUTHALAPADU, ONGOLE, ANDHRA PRADESH, 523262
          </p>
          <p className="text-white mb-4">
            8096112016, shivajibusiness392@gmail.com
          </p>
        </div>

        <div className="w-full h-px bg-yellow-500 mb-6"></div>

        {/* Legal Text */}
        <div className="max-w-4xl mx-auto mb-6">
          <p className="text-white text-sm leading-relaxed">
            You accept these terms of service, all applicable laws and regulations, and the responsibility for adhering to any local laws that may be in force by accessing the website at <strong className="text-yellow-400">sivajienterprises.com</strong>. You are not permitted to use or access this website if you disagree with any of these terms. The website simply uses the photographs for representational purposes. This website's content is shielded by relevant copyright and trademark laws.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-yellow-400 text-sm">
          All Rights Reserved © 2024 sivajienterprises.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;