import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import closeIcon from "../assets/images/icon-close.svg"; // add a close icon if available

const options = [
  { name: "Pricing" },
  { name: "Product" },
  { name: "About Us" },
  { name: "Careers" },
  { name: "Community" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative container mx-auto p-2">
      <div className="flex justify-between items-center">
        <img src={logo} alt="Logo" />

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {options.map((opt, ind) => (
            <a
              href="#"
              key={ind}
              className="text-gray-700 hover:text-darkGrayishBlue cursor-pointer"
            >
              {opt.name}
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center">
          <button className="hidden md:block text-md rounded-full px-6 py-2 text-white bg-brightRed hover:bg-red-400">
            Get Started
          </button>

          {/* Hamburger menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden focus:outline-none ml-4"
          >
            <img src={isOpen ? closeIcon : hamburger} alt="Menu" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="flex flex-col items-center md:hidden py-8 mt-6 space-y-6 font-bold bg-white drop-shadow-md rounded-lg">
          {options.map((opt, ind) => (
            <a href="#" key={ind}>
              {opt.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
