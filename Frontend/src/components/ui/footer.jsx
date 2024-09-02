import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Logo and Title */}
          <div className="flex-1 mb-6 md:mb-0 text-black">
            <Link
              to="/"
              className="text-[#8a31c2dd] no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              YAR
            </Link>

            {/* Get in Touch Section */}
            <div className="flex-1 mb-6 md:mb-0 md:w-[20rem]">
              <h2 className="font-semibold tracking-tighter uppercase text-white">
                Get in Touch
              </h2>
              <p className="text-neutral-400 mt-2">
                We are here to help you with any inquiries, support, or
                information you need.
              </p>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="flex-1 mb-6 md:mb-0">
            <p className="uppercase text-neutral-100 md:mb-6">Social</p>
            <ul className="list-reset">
              <li className="mt-2">
                <a
                  href="https://wa.me/message/GN4Y7XYZAYUEI1"
                  className="text-neutral-300 hover:text-[#8a31c2dd]"
                >
                  WhatsApp
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="https://www.linkedin.com/in/yar-tech-services-2957b931b"
                  className="text-neutral-300 hover:text-[#8a31c2dd]"
                >
                  LinkedIn
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="https://www.instagram.com/yar_tech_service?utm_source=qr&igsh=dWUxdzl6NG03MWh0"
                  className="text-neutral-300 hover:text-[#8a31c2dd]"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links Section */}
          <div className="flex-1">
            <p className="uppercase text-neutral-100 md:mb-6">Company</p>
            <ul className="list-reset">
              <li className="mt-2">
                <Link
                  to="/services"
                  className="text-neutral-300 hover:text-[#8a31c2dd]"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Our Services
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="/about"
                  className="text-neutral-300 hover:text-[#8a31c2dd]"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  About Us
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="/contact"
                  className="text-neutral-300 hover:text-[#8a31c2dd]"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} YAR Tech Services. All rights reserved. -yarts.in
      </div>
    </footer>
  );
};

export default Footer;
