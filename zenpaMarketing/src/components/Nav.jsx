import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  mobileNavContainerVariant,
  mobileNavListVariant,
  mobileNavExitProps,
} from "../data/animationConfig";

const activeClassName = "selected navlink";

const NavLinks = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${isActive ? "text-orange-700" : "text-gray-700"} `
        }
        id="nav"
      >
        Home
      </NavLink>
      <NavLink
        to="/aboutUs"
        className={({ isActive }) =>
          `${isActive ? "text-orange-700" : "text-gray-700"}`
        }
        id="nav"
      >
        About Us
      </NavLink>
      <NavLink
        to="/ContactUs"
        className={({ isActive }) =>
          `${isActive ? "text-orange-700" : "text-gray-700"}`
        }
        id="nav"
      >
        Contact Us
      </NavLink>
      <NavLink
        to="/location"
        className={({ isActive }) =>
          `${isActive ? "text-orange-700" : "text-gray-700"}`
        }
        id="nav"
      >
        Visit Us
      </NavLink>
      <NavLink
        to="/Products"
        className={({ isActive }) =>
          `${
            isActive ? "text-orange-700" : "text-gray-700"
          } text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm  px-5 mt-[-0.35rem] py-2  mr-2 focus:outline-none`
        }
      >
        Our Products
      </NavLink>
    </>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-5/12 flex justify-end mr-4">
        <div className="  hidden  w-full  justify-between md:flex  ">
          <NavLinks />
        </div>
        <div className="md:hidden ">
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
            className="mt-4 basis-full  flex-col flex items-center  md:hidden"
          >
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-gray-700"} `
                }
              >
                Home
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink
                to="/aboutUs"
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-gray-700"}  `
                }
              >
                About
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink
                to="/ContactUs"
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-gray-700"} `
                }
              >
                Contact
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink
                to="/location"
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-gray-700"}`
                }
              >
                Visit Us
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink
                to="/Products"
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-gray-700"}
                                         text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm  px-5 mt-[-0.35rem] py-2  mr-2 focus:outline-none
                                         `
                }
              >
                Our Products
              </NavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
