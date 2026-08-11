import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faArrowRight,
  faHouse,
  faBuilding,
  faBolt,
  faGear,
  faBox,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/img/electrode.png";

const Drawer = ({ isDrawerOpen, closeDrawer }) => {
  const location = useLocation();

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  if (!isDrawerOpen) {
    return null;
  }

  const menuItems = [
    {
      name: "Home",
      path: "/",
      icon: faHouse,
    },
    {
      name: "About Us",
      path: "/about",
      icon: faBuilding,
    },
    {
      name: "Electrical",
      path: "/electrical",
      icon: faBolt,
    },
    {
      name: "Mechanical",
      path: "/mechanical",
      icon: faGear,
    },
    {
      name: "Trading",
      path: "/trading",
      icon: faBox,
    },
  ];

  return (
    <div className="fixed inset-0 z-[9999] lg:hidden">

      {/* ================= OVERLAY ================= */}
      <div
        onClick={closeDrawer}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* ================= MOBILE MENU ================= */}
      <div
        className="
          absolute
          top-0
          right-0
          h-full
          w-[88%]
          max-w-[390px]
          bg-white
          shadow-2xl
          flex
          flex-col
        "
        onClick={(e) => e.stopPropagation()}
      >

        {/* ================= HEADER ================= */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">

          {/* Logo + Company */}
          <Link
            to="/"
            onClick={closeDrawer}
            className="flex items-center gap-3 min-w-0"
          >
            <img
              src={logo}
              alt="Electrodes Engineering Services"
              className="w-11 h-11 object-contain flex-shrink-0"
            />

            <div className="min-w-0">
              <h2 className="text-[15px] sm:text-base font-bold text-gray-900 leading-tight">
                Electrodes Engineering
              </h2>

              <p className="text-[9px] sm:text-[10px] font-semibold tracking-[3px] text-gray-500 uppercase mt-1">
                Services (Pvt.) Ltd
              </p>
            </div>
          </Link>

          {/* Close */}
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close menu"
            className="
              w-10
              h-10
              flex
              items-center
              justify-center
              rounded-full
              bg-gray-100
              text-gray-700
              hover:bg-cyan-500
              hover:text-white
              transition-all
              duration-300
              flex-shrink-0
            "
          >
            <FontAwesomeIcon icon={faXmark} className="text-lg" />
          </button>
        </div>

        {/* ================= MENU TITLE ================= */}
        <div className="px-6 pt-8 pb-4">
          <p className="text-xs font-semibold uppercase tracking-[3px] text-cyan-600">
            Navigation
          </p>

          <h3 className="mt-1 text-2xl font-bold text-gray-900">
            Explore Our Website
          </h3>
        </div>

        {/* ================= MENU ITEMS ================= */}
        <nav className="flex-1 px-5 overflow-y-auto">

          <div className="space-y-1">

            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeDrawer}
                  className={`
                    group
                    flex
                    items-center
                    justify-between
                    w-full
                    px-4
                    py-4
                    rounded-xl
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-cyan-50 text-cyan-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-cyan-600"
                    }
                  `}
                >

                  <div className="flex items-center gap-4">

                    {/* Icon */}
                    <div
                      className={`
                        w-10
                        h-10
                        rounded-lg
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "bg-cyan-500 text-white"
                            : "bg-gray-100 text-gray-600 group-hover:bg-cyan-500 group-hover:text-white"
                        }
                      `}
                    >
                      <FontAwesomeIcon icon={item.icon} />
                    </div>

                    {/* Name */}
                    <span className="font-semibold text-[15px]">
                      {item.name}
                    </span>

                  </div>

                  {/* Arrow */}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className={`
                      text-sm
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "text-cyan-500"
                          : "text-gray-300 group-hover:text-cyan-500 group-hover:translate-x-1"
                      }
                    `}
                  />

                </Link>
              );
            })}

          </div>
        </nav>

        {/* ================= CONTACT ================= */}
        <div className="px-5 pb-5 pt-4">

          <Link
            to="/contact"
            onClick={closeDrawer}
            className="
              flex
              items-center
              justify-between
              w-full
              px-5
              py-4
              rounded-xl
              bg-gray-900
              text-white
              hover:bg-cyan-600
              transition-all
              duration-300
              shadow-lg
            "
          >
            <div className="flex items-center gap-3">

              <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                <FontAwesomeIcon icon={faPhone} />
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  Have a project?
                </p>

                <p className="font-semibold">
                  Contact Us
                </p>
              </div>

            </div>

            <FontAwesomeIcon icon={faArrowRight} />
          </Link>

          <p className="text-center text-[10px] text-gray-400 mt-4">
            © {new Date().getFullYear()} Electrodes Engineering Services
          </p>

        </div>

      </div>
    </div>
  );
};

export default Drawer;