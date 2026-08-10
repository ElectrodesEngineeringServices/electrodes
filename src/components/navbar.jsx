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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
              ? "bg-black/90 backdrop-blur-lg shadow-2xl py-2"
              : "bg-black/20 backdrop-blur-md py-3 md:py-5"
            : "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg py-2 md:py-3"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">

            {/* Logo + Company Name */}
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 min-w-0"
            >
              <img
                src={logo}
                alt="Electrodes Engineering Services"
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain flex-shrink-0"
              />

              <div className="min-w-0">
                <h2
                  className={`font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-tight whitespace-nowrap ${
                    isHome ? "text-white" : "text-gray-900"
                  }`}
                >
                  Electrodes Engineering Services
                </h2>

                <p
                  className={`text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-bold uppercase tracking-[2px] sm:tracking-[3px] ${
                    isHome ? "text-gray-200" : "text-gray-600"
                  }`}
                >
                  (Pvt.) Ltd
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-6 xl:gap-10">
              {listItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`relative font-medium text-sm xl:text-base transition-all duration-300 ${
                      location.pathname === item.path
                        ? "text-cyan-500"
                        : isHome
                        ? "text-white hover:text-cyan-400"
                        : "text-gray-800 hover:text-cyan-600"
                    }`}
                  >
                    {item.name}

                    {location.pathname === item.path && (
                      <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-cyan-500 rounded-full" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Button */}
            <div className="hidden lg:block flex-shrink-0">
              <Link to="/contact">
                <button
                  className={`px-5 xl:px-8 py-2.5 xl:py-3 rounded-full font-semibold text-sm xl:text-base border transition-all duration-300 ${
                    isHome
                      ? "border-white/30 bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 hover:border-white/50"
                      : "border-gray-300 bg-white text-gray-900 shadow-lg hover:bg-cyan-600 hover:text-white hover:border-cyan-600"
                  }`}
                >
                  Contact Us
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open menu"
              className={`lg:hidden flex-shrink-0 text-xl sm:text-2xl p-2 ${
                isHome ? "text-white" : "text-gray-900"
              }`}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>

          </div>
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