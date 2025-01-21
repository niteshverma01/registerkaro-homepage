import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import contactInfo from "../../constants/contactInfo";

const TopStrip = () => {
  const contactLinks = [
    {
      href: `mailto:${contactInfo.email}`,
      label: contactInfo.email,
      icon: <FaEnvelope />,
      ariaLabel: "email",
    },
    {
      href: `tel:${contactInfo.phone}`,
      label: contactInfo.phone,
      icon: <FaPhone />,
      ariaLabel: "phone",
    },
  ];

  const socialLinks = [
    { href: "#", icon: <FaInstagram />, ariaLabel: "Instagram" },
    { href: "#", icon: <FaFacebook />, ariaLabel: "Facebook" },
    { href: "#", icon: <FaTwitter />, ariaLabel: "Twitter" },
    { href: "#", icon: <FaPinterest />, ariaLabel: "Pinterest" },
  ];

  return (
    <div className="bg-top_strip_blue text-white text-sm px-4 flex flex-wrap justify-center md:justify-end items-center md:pr-10 pt-3 pb-3">
      {/* Contact Info */}
      <div className="flex flex-wrap justify-center items-center mx-3">
        {contactLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="hover:underline border-slate-400 md:border-r-2 px-2 flex items-center space-x-1"
            aria-label={link.ariaLabel}
          >
            <span>{link.icon}</span>
            <span>{link.label}</span>
          </a>
        ))}
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-4 mt-2 md:mt-0">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.ariaLabel}
            className="hover:text-gray-300 flex items-center"
          >
            <span>{link.icon}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopStrip;
