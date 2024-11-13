import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Delima from "../img/delima.png";
import { useStateValue } from "../context/StateProvider";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [{ user }] = useStateValue();
  const adminEmail = "randinurrizki85@gmail.com";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={Delima} className="w-14 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">Delimajaya</p>
        </Link>
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
            {[
              { path: "/", label: "Home" },
              { path: "/product", label: "Product" },
              { path: "/about", label: "About Us" },
              { path: "/service", label: "Business Division & Client" },
              { path: "/contact", label: "Contact Us" },
            ].map((item) => (
              <li key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`text-lg text-textColor duration-100 transition-all ease-in-out cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 ${
                    location.pathname === item.path ? "after:w-full" : "after:w-0"
                  } hover:after:w-full`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {user && user.email === adminEmail && (
              <li className="relative group">
                <Link
                  to="/dashboard"
                  className={`text-lg text-textColor duration-100 transition-all ease-in-out cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 ${
                    location.pathname === "/dashboard" ? "after:w-full" : "after:w-0"
                  } hover:after:w-full`}
                >
                  Dashboard
                </Link>
              </li>
            )}
          </motion.ul>
        </div>
      </div>
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <Link to="/" className="flex items-center gap-2">
          <img src={Delima} className="w-14 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">Delimajaya</p>
        </Link>
        <div className="md:hidden cursor-pointer text-gray-500" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} className="text-gray-500" /> : <FaBars size={24} className="text-gray-500" />}
        </div>
      </div>
      {isMenuOpen && (
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="flex flex-col items-center gap-4 p-4 bg-gray-200 absolute w-full left-0 top-17 z-40"
        >
          {[
            { path: "/", label: "Home" },
            { path: "/product", label: "Product" },
            { path: "/about", label: "About Us" },
            { path: "/service", label: "Business Division & Client" },
            { path: "/contact", label: "Contact Us" },
          ].map((item) => (
            <Link key={item.path} to={item.path} onClick={toggleMenu}>
              <li
                className={`text-base text-black duration-100 transition-all ease-in-out cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 ${
                  location.pathname === item.path ? "after:w-full" : "after:w-0"
                } hover:after:w-full`}
              >
                {item.label}
              </li>
            </Link>
          ))}
          {user && user.email === adminEmail && (
            <Link to="/dashboard" onClick={toggleMenu}>
              <li
                className={`text-base text-black duration-100 transition-all ease-in-out cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 ${
                  location.pathname === "/dashboard" ? "after:w-full" : "after:w-0"
                } hover:after:w-full`}
              >
                Dashboard
              </li>
            </Link>
          )}
        </motion.ul>
      )}
    </header>
  );
};

export default Header;
