const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Main Heading */}
        <h2 className="text-2xl font-bold mb-4 text-yellow-400 font-montserrat">GET CONNECTED WITH SIVAJI ENTERPRISES</h2>
        <div className="w-full h-px bg-yellow-500 mb-6"></div>

        {/* Contact Details */}
        <div className="mb-6">
          <p className="text-white mb-2 flex items-center justify-center gap-2">
            <span className="text-yellow-400">📞</span> +918096112016
          </p>
          <p className="text-white mb-2 flex items-center justify-center gap-2">
            <span className="text-yellow-400">✉️</span> shivajibusiness392@gmail.com
          </p>
          <p className="text-white mb-4">
            <span className="text-yellow-400">📍</span> Address: 1-9, MUKTHINUTHALAPADU, ONGOLE, ANDHRA PRADESH, INDIA
          </p>
        </div>

        <div className="w-full h-px bg-yellow-500 mb-6"></div>

        {/* Legal Text */}
        <div className="max-w-4xl mx-auto mb-6">
          <p className="text-white text-sm leading-relaxed">
            Use of this website (<strong className="text-yellow-400">sivajienterprises.com</strong>) is subject to compliance with all applicable laws, regulations, and the terms outlined herein. If you do not agree with these terms, you may not access or use this site. Images are for illustrative purposes only. All content is safeguarded by copyright and trademark protections.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-yellow-400 text-sm">
          © 2025 Sivaji Enterprises. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;