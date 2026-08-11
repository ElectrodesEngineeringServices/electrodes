import { useEffect, useState } from "react";
import { GiCrossMark } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Drawer = ({ isDrawerOpen, closeDrawer }) => {
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isDrawerOpen]);

  const DrawerComponents = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Us", path: "/about" },
    { id: 3, name: "Mechanical", path: "/mechanical" },
    { id: 4, name: "Electrical", path: "/electrical" },
    { id: 5, name: "Trading", path: "/trading" },
    { id: 6, name: "Contact", path: "/contact" },
  ];

  const handleButtonClick = (id, path) => {
    setActiveButton(id);

    // Pehle drawer close
    closeDrawer();

    // Phir page change
    navigate(path);
  };

  const handleOverlayClick = (e) => {
    // Sirf background overlay click hone par close hoga
    if (e.target === e.currentTarget) {
      closeDrawer();
    }
  };

  if (!isDrawerOpen) {
    return null;
  }

  return (
    <>
      {/* Dark Overlay */}
      <div
        className="
          fixed
          inset-0
          z-[999]
          bg-black/60
          backdrop-blur-sm
        "
        onClick={handleOverlayClick}
      >
        {/* Drawer */}
        <div
          className="
            fixed
            top-0
            left-0
            h-screen
            w-[85%]
            sm:w-[350px]
            bg-gray-900
            shadow-2xl
            flex
            flex-col
            overflow-y-auto
          "
        >
          {/* Header */}
          <div
            className="
              flex
              items-center
              justify-between
              px-5
              py-5
              border-b
              border-gray-700
            "
          >
            <div>
              <h2 className="text-white text-lg font-bold">
                Electrodes Engineering
              </h2>

              <p className="text-gray-400 text-xs uppercase tracking-[3px]">
                Services
              </p>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={closeDrawer}
              aria-label="Close menu"
              className="
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
                text-white
                text-xl
                hover:bg-white/10
                hover:text-cyan-400
                transition
              "
            >
              <GiCrossMark />
            </button>
          </div>

          {/* Menu */}
          <div className="flex-1 px-5 py-8">
            <div className="flex flex-col gap-3">
              {DrawerComponents.map((component) => (
                <button
                  key={component.id}
                  type="button"
                  onClick={() =>
                    handleButtonClick(component.id, component.path)
                  }
                  className={`
                    w-full
                    flex
                    items-center
                    justify-start
                    px-5
                    py-4
                    rounded-xl
                    border
                    text-left
                    font-medium
                    transition-all
                    duration-300

                    ${
                      activeButton === component.id
                        ? "bg-cyan-500 text-white border-cyan-500"
                        : "bg-white/5 text-white border-gray-700 hover:bg-cyan-500 hover:border-cyan-500"
                    }
                  `}
                >
                  {component.name}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="px-5 py-5 border-t border-gray-700">
            <p className="text-gray-400 text-xs text-center">
              © Electrodes Engineering Services
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawer;