import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";
import FooterCTA from "./FooterCTA";

const Footer = () => {
  return (
    <footer className="mt-10">
      {/* Footer CTA Section */}
      <FooterCTA />
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-10 md:flex-row md:justify-between md:items-start ">
        {/* Branding */}
        <div className="flex flex-col items-start md:w-1/4">
          <Link to="/" className="flex shrink-0 items-center">
            <img
              src={logo}
              alt="Delight Paints"
              className="h-12 w-auto object-contain sm:h-12.5"
            />
          </Link>
          <p className="mt-4 text-xs text-neutral-400">
            Beautiful homes for brighter tomorrow. Delight Paints is your trusted partner in creating vibrant and inspiring spaces.
          </p>
        </div>

        {/* Products Category */}
        <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-1 md:w-3/4">
        <div>
          <h2 className="text-sm font-semibold mb-4">Products</h2>
          <ul className="text-xs space-y-2 text-neutral-400">
            <li>
              <Link
                to="/category/interior-paints"
                className="hover:text-[#9e2519] transition-colors"
              >
                Interior Paints
              </Link>
            </li>
            <li>
              <Link
                to="/category/exterior-paints"
                className="hover:text-[#9e2519] transition-colors"
              >
                Exterior Paints
              </Link>
            </li>
            <li>
              <Link
                to="/category/primers"
                className="hover:text-[#9e2519] transition-colors"
              >
                Primers
              </Link>
            </li>
            <li>
              <Link
                to="/category/waterproofing"
                className="hover:text-[#9e2519] transition-colors"
              >
                Waterproofing
              </Link>
            </li>
            <li>
              <Link
                to="/category/budget-range"
                className="hover:text-[#9e2519] transition-colors"
              >
                Budget Range
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-sm font-semibold mb-4">Quick Links</h2>
          <ul className="text-xs space-y-2 text-neutral-400">
            <li>
              <Link
                to="/about"
                className="hover:text-[#9e2519] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#9e2519] transition-colors"
              >
                Contact 
              </Link>
            </li>
            <li>
              <Link
                to="/dealers"
                className="hover:text-[#9e2519] transition-colors"
              >
                Dealer Network
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-sm font-semibold mb-4">Support</h2>
          <ul className="text-xs space-y-2 text-neutral-400">
            <li>
              <Link
                to="/faqs"
                className="hover:text-[#9e2519] transition-colors"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#9e2519] transition-colors"
              >
                color guide
              </Link>
            </li>
            <li>
              <Link
                to="/product-brochures"
                className="hover:text-[#9e2519] transition-colors"
              >
                Product Brochures
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-neutral-400 text-xl">
            <a href="#" className="hover:text-[#9e2519] transition-colors">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-[#9e2519] transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#9e2519] transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#9e2519] transition-colors">
              <FaLinkedin />
            </a>
          </div>
        </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pb-3 text-center text-gray-700 text-sm">
        <p>© {new Date().getFullYear()} Delight Paints. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
