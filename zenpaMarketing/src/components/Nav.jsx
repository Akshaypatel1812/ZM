// import { NavLink } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   mobileNavContainerVariant,
//   mobileNavListVariant,
//   mobileNavExitProps,
// } from "../data/animationConfig";

// const activeClassName = "selected navlink";

// const NavLinks = () => {
//   return (
//     <>
//       <NavLink
//         to="/"
//         className={({ isActive }) =>
//           `${isActive ? "text-orange-700" : "text-gray-700"} `
//         }
//         id="nav"
//       >
//         Home
//       </NavLink>
//       <NavLink
//         to="/aboutUs"
//         className={({ isActive }) =>
//           `${isActive ? "text-orange-700" : "text-gray-700"}`
//         }
//         id="nav"
//       >
//         About Us
//       </NavLink>
//       <NavLink
//         to="/ContactUs"
//         className={({ isActive }) =>
//           `${isActive ? "text-orange-700" : "text-gray-700"}`
//         }
//         id="nav"
//       >
//         Contact Us
//       </NavLink>
//       <NavLink
//         to="/location"
//         className={({ isActive }) =>
//           `${isActive ? "text-orange-700" : "text-gray-700"}`
//         }
//         id="nav"
//       >
//         Visit Us
//       </NavLink>
//       <NavLink
//         to="/Products"
//         className={({ isActive }) =>
//           `${
//             isActive ? "text-orange-700" : "text-gray-700"
//           } text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm  px-5 mt-[-0.35rem] py-2  mr-2 focus:outline-none`
//         }
//       >
//         Our Products
//       </NavLink>
//     </>
//   );
// };

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <nav className="w-5/12 flex justify-end mr-4">
//         <div className="hidden w-full justify-between md:flex mt-1.5  ">
//           <NavLinks />
//         </div>
//         <div className="md:hidden ">
//           <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
//         </div>
//       </nav>

//       <AnimatePresence mode="wait">
//         {isOpen && (
//           <motion.div
//             layout="position"
//             key="nav-links"
//             variants={mobileNavContainerVariant}
//             initial="hidden"
//             animate="show"
//             className="mt-4 basis-full  flex-col flex items-center  md:hidden"
//           >
//             <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   `${isActive ? "text-orange-700" : "text-gray-700"} `
//                 }
//               >
//                 Home
//               </NavLink>
//             </motion.div>
//             <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
//               <NavLink
//                 to="/aboutUs"
//                 className={({ isActive }) =>
//                   `${isActive ? "text-orange-700" : "text-gray-700"}  `
//                 }
//               >
//                 About
//               </NavLink>
//             </motion.div>
//             <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
//               <NavLink
//                 to="/ContactUs"
//                 className={({ isActive }) =>
//                   `${isActive ? "text-orange-700" : "text-gray-700"} `
//                 }
//               >
//                 Contact
//               </NavLink>
//             </motion.div>
//             <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
//               <NavLink
//                 to="/location"
//                 className={({ isActive }) =>
//                   `${isActive ? "text-orange-700" : "text-gray-700"}`
//                 }
//               >
//                 Visit Us
//               </NavLink>
//             </motion.div>
//             <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
//               <NavLink
//                 to="/Products"
//                 className={({ isActive }) =>
//                   `${isActive ? "text-orange-700" : "text-gray-700"}
//                                          text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm  px-5 mt-[-0.35rem] py-2  mr-2 focus:outline-none
//                                          `
//                 }
//               >
//                 Our Products
//               </NavLink>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Nav;


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

const NavLinks = ({ onLinkClick }) => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${isActive ? "text-orange-700" : "text-gray-700"} `
        }
        id="nav"
        
        onClick={onLinkClick}
      >
        Home
      </NavLink>
      <NavLink
        to="/aboutUs"
        className={({ isActive }) =>
          `${isActive ? "text-orange-700" : "text-gray-700"}`
        }
        id="nav"
        onClick={onLinkClick}
      >
        About Us
      </NavLink>
      <NavLink
        to="/ContactUs"
        className={({ isActive }) =>
          `${isActive ? "text-orange-700" : "text-gray-700"}`
        }
        id="nav"
        onClick={onLinkClick}
      >
        Contact Us
      </NavLink>
      <NavLink
        to="/location"
        className={({ isActive }) =>
          `${isActive ? "text-orange-700" : "text-gray-700"}`
        }
        id="nav"
        onClick={onLinkClick}
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
        onClick={onLinkClick}
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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-gray-700"} `
                }
                onClick={closeNavbar}
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
                onClick={closeNavbar}
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
                onClick={closeNavbar}
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
                onClick={closeNavbar}
              >
                Visit Us
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink
                to="/Products"
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-gray-700"}
                                     text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm  px-5 mt-[-0.35rem] py-2  mr-2 focus:outline-none`
                }
                onClick={closeNavbar}
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



//3
// import { NavLink } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   mobileNavContainerVariant,
//   mobileNavListVariant,
//   mobileNavExitProps,
// } from "../data/animationConfig";

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeNavbar = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className={`relative ${isOpen ? 'nav-open' : ''}`}>
//       <nav className="w-full flex justify-between items-center p-4 bg-white shadow md:shadow-none md:bg-transparent">
//         <div className="hidden md:flex">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `${isActive ? "text-orange-700" : "text-gray-700"} mx-2`
//             }
//             onClick={closeNavbar}
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/aboutUs"
//             className={({ isActive }) =>
//               `${isActive ? "text-orange-700" : "text-gray-700"} mx-2`
//             }
//             onClick={closeNavbar}
//           >
//             About Us
//           </NavLink>
//           <NavLink
//             to="/ContactUs"
//             className={({ isActive }) =>
//               `${isActive ? "text-orange-700" : "text-gray-700"} mx-2`
//             }
//             onClick={closeNavbar}
//           >
//             Contact Us
//           </NavLink>
//           <NavLink
//             to="/location"
//             className={({ isActive }) =>
//               `${isActive ? "text-orange-700" : "text-gray-700"} mx-2`
//             }
//             onClick={closeNavbar}
//           >
//             Visit Us
//           </NavLink>
//           <NavLink
//             to="/Products"
//             className={({ isActive }) =>
//               `${isActive ? "text-orange-700" : "text-gray-700"} text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2 mx-2`
//             }
//             onClick={closeNavbar}
//           >
//             Our Products
//           </NavLink>
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleNavbar}>
//             {isOpen ? <X /> : <Menu />}
//           </button>
//         </div>
//       </nav>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             key="nav-links"
//             variants={mobileNavContainerVariant}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//             className="fixed top-0 left-0 w-full bg-white shadow md:hidden"
//           >
//             <div className="flex flex-col items-center mt-4">
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   `${isActive ? "text-orange-700" : "text-gray-700"} my-2`
//                 }
//                 onClick={closeNavbar}
//               >
//                 Home
//               </NavLink>
//               <NavLink
//                 to="/aboutUs"
//                 className={({ isActive }) =>
//                   `${isActive ? "text-orange-700" : "text-gray-700"} my-2`
//                 }
//                 onClick={closeNavbar}
//               >
//                 About
//               </NavLink>
//               <NavLink
//                 to="/ContactUs"
//                 className={({ isActive }) =>
//                   `${isActive ? "text-orange-700" : "text-gray-700"} my-2`
//                 }
//                 onClick={closeNavbar}
//               >
//                 Contact
//               </NavLink>
//               <NavLink
//                 to="/location"
//                 className={({ isActive }) =>
//                   `${isActive ? "text-orange-700" : "text-gray-700"} my-2`
//                 }
//                 onClick={closeNavbar}
//               >
//                 Visit Us
//               </NavLink>
//               <NavLink
//                 to="/Products"
//                 className={({ isActive }) =>
//                   `${isActive ? "text-orange-700" : "text-gray-700"} text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2 my-2`
//                 }
//                 onClick={closeNavbar}
//               >
//                 Our Products
//               </NavLink>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className={`main-content ${isOpen ? 'nav-open' : ''}`}>
//         {/* Main content goes here */}
//       </div>

//       <style jsx="true">{`
//         .nav-open .main-content {
//           margin-top: 200px; /* Adjust based on the height of your navbar */
//         }

//         @media (max-width: 768px) {
//           .fixed-nav {
//             position: fixed;
//             top: 0;
//             left: 0;
//             width: 100%;
//             background-color: white;
//             z-index: 1000;
//           }

//           .main-content {
//             transition: margin-top 0.3s ease;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Nav;




