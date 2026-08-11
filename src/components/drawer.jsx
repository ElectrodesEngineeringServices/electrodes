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
        className="
          absolute
          inset-0
          bg-black/60
          backdrop-blur-[2px]
        "
      />

      {/* ================= DRAWER ================= */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          absolute
          top-0
          right-0
          h-full
          w-[86%]
          max-w-[380px]
          bg-[#0b1220]
          text-white
          shadow-2xl
          flex
          flex-col
        "
      >

        {/* ================= HEADER ================= */}
        <div
          className="
            px-5
            py-5
            border-b
            border-white/10
          "
        >
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link
              to="/"
              onClick={closeDrawer}
              className="flex items-center gap-3"
            >
              <div
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-white
                  flex
                  items-center
                  justify-center
                  shadow-md
                "
              >
                <img
                  src={logo}
                  alt="Electrodes Engineering Services"
                  className="w-8 h-8 object-contain"
                />
              </div>

              <div>
                <h2 className="text-[15px] font-bold leading-tight">
                  Electrodes Engineering
                </h2>

                <p
                  className="
                    mt-1
                    text-[9px]
                    uppercase
                    tracking-[3px]
                    text-gray-400
                  "
                >
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
                rounded-full
                border
                border-white/10
                bg-white/5
                text-gray-300
                flex
                items-center
                justify-center
                hover:bg-cyan-500
                hover:text-white
                hover:border-cyan-500
                transition-all
                duration-300
              "
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

          </div>
        </div>

        {/* ================= NAVIGATION ================= */}
        <div className="px-5 pt-7">

          <p
            className="
              text-[10px]
              uppercase
              tracking-[3px]
              font-semibold
              text-cyan-400
              mb-2
            "
          >
            Main Menu
          </p>

          <p className="text-xl font-semibold text-white mb-5">
            Navigation
          </p>

        </div>

        {/* ================= MENU ITEMS ================= */}
        <nav className="flex-1 px-4 overflow-y-auto">

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
                    px-4
                    py-3.5
                    rounded-xl
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >

                  <div className="flex items-center gap-4">

                    {/* Icon */}
                    <div
                      className={`
                        w-9
                        h-9
                        rounded-lg
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-white/5 text-gray-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-400"
                        }
                      `}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="text-sm"
                      />
                    </div>

                    {/* Name */}
                    <span className="text-[15px] font-medium">
                      {item.name}
                    </span>

                  </div>

                  {/* Arrow */}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className={`
                      text-xs
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "text-white"
                          : "text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1"
                      }
                    `}
                  />

                </Link>
              );
            })}

          </div>

        </nav>

        {/* ================= CONTACT ================= */}
        <div className="px-4 pb-4 pt-3">

          <Link
            to="/contact"
            onClick={closeDrawer}
            className="
              group
              flex
              items-center
              justify-between
              px-4
              py-4
              rounded-xl
              bg-white/5
              border
              border-white/10
              hover:bg-cyan-500
              hover:border-cyan-500
              transition-all
              duration-300
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  w-10
                  h-10
                  rounded-lg
                  bg-cyan-500
                  flex
                  items-center
                  justify-center
                  text-white
                  group-hover:bg-white
                  group-hover:text-cyan-600
                  transition
                "
              >
                <FontAwesomeIcon icon={faPhone} />
              </div>

              <div>
                <p className="text-[10px] text-gray-400 group-hover:text-cyan-100">
                  Need a solution?
                </p>

                <p className="text-sm font-semibold text-white">
                  Contact Us
                </p>
              </div>

            </div>

            <FontAwesomeIcon
              icon={faArrowRight}
              className="
                text-gray-500
                group-hover:text-white
                group-hover:translate-x-1
                transition
              "
            />

          </Link>

          <p className="text-center text-[9px] text-gray-600 mt-4">
            © {new Date().getFullYear()} Electrodes Engineering Services
          </p>

        </div>

      </div>
    </div>
  );
};

export default Drawer;