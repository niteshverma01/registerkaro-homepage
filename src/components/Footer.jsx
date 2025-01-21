import React from "react";
import { FaFacebookF, FaGoogle, FaApple, FaInstagram } from "react-icons/fa";

const FooterSection = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-blue-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
        {/* Social Media and Intro */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <p className="mb-4 text-sm">Design outstanding interfaces with advanced Figma features in a matter of minutes.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white text-lg">
              <FaGoogle />
            </a>
            <a href="#" className="text-white text-lg">
              <FaApple />
            </a>
            <a href="#" className="text-white text-lg">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h4 className="text-orange-400 font-bold mb-4">START A BUSINESS</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Solutions</a></li>
            <li><a href="#" className="hover:underline">Integrations</a></li>
            <li><a href="#" className="hover:underline">Enterprise</a></li>
            <li><a href="#" className="hover:underline">Solutions</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h4 className="text-orange-400 font-bold mb-4">GOVERNMENT REGISTRATION</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Partners</a></li>
            <li><a href="#" className="hover:underline">Community</a></li>
            <li><a href="#" className="hover:underline">Developers</a></li>
            <li><a href="#" className="hover:underline">App</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h4 className="text-orange-400 font-bold mb-4">COMPLIANCE & TAX</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Channels</a></li>
            <li><a href="#" className="hover:underline">Scale</a></li>
            <li><a href="#" className="hover:underline">Watch the Demo</a></li>
            <li><a href="#" className="hover:underline">Our Competition</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/5">
          <h4 className="text-orange-400 font-bold mb-4">BIS & CDSCO</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">News</a></li>
            <li><a href="#" className="hover:underline">Leadership</a></li>
            <li><a href="#" className="hover:underline">Media Kit</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center">
        <button 
          onClick={scrollToTop} 
          className="bg-orange-400 hover:bg-orange-500 text-white rounded-full p-3 mb-4 w-20">
          <span className="text-xl">&#8679;</span>
        </button>
        <p className="text-sm">© 2024 RegisterKaro. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
