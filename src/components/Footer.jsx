import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-gray-700 pt-10 pb-6">
      <div className="container mx-auto flex flex-col items-center">
        {/* Header Footer */}
        <h2 className="text-2xl font-semibold mb-8">Follow Us on Social Media</h2>

        {/* Social Media Grid */}
        <div className="grid grid-cols-3 gap-8 w-full max-w-4xl">
          {/* HiLo Bubble */}
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2 p-4 bg-blue-50 rounded-3xl shadow-lg w-full justify-center">
              <img src="/path/to/HiLo-logo.png" alt="" className="w-12" />
              <div className="flex space-x-2">
                <FaFacebookF className="text-xl text-blue-600" />
                <FaTwitter className="text-xl text-blue-400" />
                <FaInstagram className="text-xl text-pink-600" />
                <FaYoutube className="text-xl text-red-600" />
              </div>
            </div>
          </div>

          {/* HiLo Teen Bubble */}
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2 p-4 bg-blue-50 rounded-3xl shadow-lg w-full justify-center">
              <img src="" alt="" className="w-12" />
              <div className="flex space-x-2">
                <FaFacebookF className="text-xl text-blue-600" />
                <FaTwitter className="text-xl text-blue-400" />
                <FaInstagram className="text-xl text-pink-600" />
                <FaYoutube className="text-xl text-red-600" />
              </div>
            </div>
          </div>

          {/* HiLo School Bubble */}
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2 p-4 bg-blue-50 rounded-3xl shadow-lg w-full justify-center">
              <img src="" alt="" className="w-12" />
              <div className="flex space-x-2">
                <FaFacebookF className="text-xl text-blue-600" />
                <FaTwitter className="text-xl text-blue-400" />
                <FaInstagram className="text-xl text-pink-600" />
                <FaYoutube className="text-xl text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Links */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Copyright © Nutrifood 2021 - 2024 All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="/terms" className="hover:underline">
              Terms and Conditions
            </a>
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
