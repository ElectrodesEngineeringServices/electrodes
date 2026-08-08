import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Drawer from "./drawer";
import logo from "../assets/img/electrode.png";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const listItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Us", path: "/about" },
    { id: 3, name: "Electrical", path: "/electrical" },
    { id: 4, name: "Mechanical", path: "/mechanical" },
    { id: 5, name: "Trading", path: "/trading" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isHome
            ? scrolled
              ? "bg-black/80 backdrop-blur-lg shadow-2xl py-3"
              : "bg-white/10 backdrop-blur-md py-5"
            : "bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-lg py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* Logo + Company Name */}
         <Link to="/" className="flex items-center gap-2">

 <img
  src={logo}
  alt="Logo"
  className="h-10 sm:h-12 md:h-14 w-auto"
/>

  <div className="flex flex-col">

    <h2
  className={`font-bold text-base sm:text-lg md:text-2xl leading-tight whitespace-nowrap ${
    isHome ? "text-white" : "text-gray-900"
  }`}
>
  Electrodes Engineering Services
</h2>

    <p
      className={`text-sm md:text-lg font-bold uppercase tracking-[4px] ${
        isHome ? "text-gray-200" : "text-gray-600"
      }`}
    >
      (Pvt.) Ltd
    </p>

  </div>

</Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10">
            {listItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`relative font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? "text-cyan-600"
                      : isHome
                      ? "text-white hover:text-cyan-400"
                      : "text-gray-800 hover:text-cyan-600"
                  }`}
                >
                  {item.name}

                  {location.pathname === item.path && (
                    <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-cyan-500 rounded-full"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <button
                className={`px-8 py-3 rounded-full font-semibold border transition-all duration-300 ${
                  isHome
                    ? "border-white/30 bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 hover:border-white/50"
                    : "border-gray-300 bg-white text-gray-900 shadow-lg hover:bg-cyan-600 hover:text-white hover:border-cyan-600"
                }`}
              >
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className={`lg:hidden text-2xl ${
              isHome ? "text-white" : "text-gray-900"
            }`}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

        </div>
      </nav>

      <Drawer
        isDrawerOpen={isDrawerOpen}
        closeDrawer={() => setIsDrawerOpen(false)}
      />
    </>
  );
};

export default Navbar;