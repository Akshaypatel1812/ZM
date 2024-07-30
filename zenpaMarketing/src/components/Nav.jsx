
import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import {
  mobileNavContainerVariant,
  mobileNavListVariant,
  mobileNavExitProps,
} from "../data/animationConfig";

const NavLinks = ({ onLinkClick }) => {
  return (
    <>
      <ScrollLink
        to="home"
        smooth={true}
        duration={500}
        className="text-gray-800 cursor-pointer hover:text-orange-700"
        onClick={onLinkClick}
      >
        Home
      </ScrollLink>
      <ScrollLink
        to="aboutUs"
        smooth={true}
        duration={500}
        className="text-gray-800 cursor-pointer  hover:text-orange-700"
        onClick={onLinkClick}
      >
        About Us
      </ScrollLink>
      <ScrollLink
        to="contactUs"
        smooth={true}
        duration={500}
        className="text-gray-800 cursor-pointer  hover:text-orange-700"
        onClick={onLinkClick}
      >
        Contact Us
      </ScrollLink>
      <ScrollLink
        to="location"
        smooth={true}
        duration={500}
        className="text-gray-800 cursor-pointer  hover:text-orange-700"
        onClick={onLinkClick}
      >
        Visit Us
      </ScrollLink>
      <ScrollLink
        to="products"
        smooth={true}
        duration={500}
        className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2 mt-[-0.35rem] mr-2 focus:outline-none cursor-pointer items-center"
        onClick={onLinkClick}
      >
        Our Shop
      </ScrollLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="w-5/12 flex justify-end mr-4">
        <div className="hidden w-full justify-between md:flex mt-1.5">
          <NavLinks onLinkClick={closeNavbar} />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            layout="position"
            key="nav-links"
            variants={mobileNavContainerVariant}
            initial="hidden"
            animate="show"
            className="mt-0 basis-full flex-col flex items-center md:hidden bg-white"
          >
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="text-gray-700 cursor-pointer"
                onClick={closeNavbar}
              >
                Home
              </ScrollLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <ScrollLink
                to="aboutUs"
                smooth={true}
                duration={500}
                className="text-gray-700 cursor-pointer"
                onClick={closeNavbar}
              >
                About Us
              </ScrollLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <ScrollLink
                to="contactUs"
                smooth={true}
                duration={500}
                className="text-gray-700 cursor-pointer"
                onClick={closeNavbar}
              >
                Contact Us
              </ScrollLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <ScrollLink
                to="location"
                smooth={true}
                duration={500}
                className="text-gray-700 cursor-pointer"
                onClick={closeNavbar}
              >
                Visit Us
              </ScrollLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <ScrollLink
                to="products"
                smooth={true}
                duration={500}
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2 mt-[-0.35rem] mr-2 focus:outline-none cursor-pointer"
                onClick={closeNavbar}
              >
                Our Products
              </ScrollLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;



