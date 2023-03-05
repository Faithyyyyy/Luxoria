import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar({ navIcon, handleNav }) {
  const [toggle, setToggle] = useState(false);
  const [closeNavbar, setcloseNavbar] = useState(false);
  const closeNav = () => {
    closeNavbar(true);
  };
  const changeBg = () => {
    if (window.scrollY >= 80) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  window.addEventListener("scroll", changeBg);
  return (
    <>
      <div
        className={`${
          toggle ? "toggleBg" : ""
        } w-full nav h-24 hidden md:block font-poppins fixed px-6 pt-7 z-50`}
      >
        <div
          className={` md:flex justify-between items-center  max-w-7xl mx-auto `}
        >
          <nav className="flex gap-11 items-center">
            <Link to="/">
              <h2 className="text-customDarkBlue font-manrope font-black text-xl lg:text-2xl tracking-[6px] lg:tracking-[6px] lg:leading-[0.8] leading-[1] md: mr-9">
                LUXORIA{" "}
                <span className="font-medium block tracking-[4.5px] text-sm lg:tracking-[6.5px] ">
                  PROPERTIES
                </span>
              </h2>
            </Link>
            <NavLink to="/" className="text-lg ">
              Ho
            </NavLink>
            <NavLink to="houses" className="text-lg ">
              Properties
            </NavLink>
          </nav>
          <div className="">
            <a
              href=""
              className="bg-customDarkBlue text-white h-10 flex px-6 rounded-sm items-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      {/* Mobile Render */}
      <div className="md:hidden bg-[#C4C4C426] transition-all">
        <div className="flex justify-between px-5 pt-8">
          <h2
            className={`text-customDarkBlue font-manrope font-black text-xl tracking-[6px]  leading-[1] ${
              closeNavbar && "hidden"
            }`}
          >
            LUXORIA{" "}
            <span className="font-medium block tracking-[4.5px] text-sm lg:tracking-[6.5px] ">
              PROPERTIES
            </span>
          </h2>
          <div
            className={`w-6  h-8  relative ${navIcon ? "" : "top-2"} z-50 `}
            onClick={handleNav}
          >
            <span
              className={`w-full h-[3px] rounded-md block absolute transition duration-500 ${
                navIcon ? "top-[60%]" : "top-0"
              } ${navIcon ? "-rotate-45" : ""} ${
                navIcon ? "bg-white" : "bg-customDarkBlue"
              }`}
            ></span>
            <span
              className={`  h-[3px] rounded-md block absolute top-[30%] transition duration-500 ${
                navIcon ? "w-0" : "w-[50%]"
              } ${navIcon ? "bg-white" : "bg-customDarkBlue"}`}
            ></span>
            <span
              className={`w-full h-[3px] rounded-md block absolute transition duration-500 ${
                navIcon ? "rotate-45" : ""
              } ${navIcon ? "bg-white" : "bg-customDarkBlue"} top-[60%] `}
            ></span>
          </div>
        </div>
        <div
          className={`bg-customDarkBlue h-[250px] flex flex-col gap-12 p-10 text-white z-10 absolute top-0 w-full ${
            navIcon ? "block" : "hidden"
          } navbar`}
        >
          <Link to="" onClick={closeNav}>
            Home
          </Link>
          <Link to="/houses" onClick={closeNav}>
            Properties
          </Link>
        </div>
      </div>
      {/* Mobile Render */}
    </>
  );
}

export default Navbar;
