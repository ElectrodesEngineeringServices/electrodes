import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Img1 from "../assets/img/slider1.jpeg";
import Img2 from "../assets/img/slider2.jpeg";
import Img3 from "../assets/img/pad.jpeg";
import Img4 from "../assets/img/slider4.jpeg";
import Img5 from "../assets/img/HT.png";
import Img6 from "../assets/img/slider6.jpeg";
import Img7 from "../assets/img/slider7.jpeg";
import Img8 from "../assets/img/slider8.jpeg";
import Img10 from "../assets/img/slider10.jpeg";
import Img11 from "../assets/img/slider5.jpeg";

const data = [
  { image: Img1, title: "Low Voltage (LV) Electrical Switchgear" },
  { image: Img2, title: "Solar Power System Installation" },
  { image: Img3, title: "Pad Mounted Transformer Installation" },
  { image: Img4, title: "Fire Fighting System" },
  { image: Img5, title: "HT PFI Panel" },
  { image: Img6, title: "Earthing System" },
  { image: Img7, title: "Cable Tray" },
  { image: Img8, title: "Hydraulic Bollard System 12K" },
  { image: Img10, title: "MDB" },
  { image: Img11, title: "FM-200 System" },
];

const PartnerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);

  const sliderRef = useRef(null);

  // ==============================
  // RESPONSIVE CARD COUNT
  // ==============================
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(4);
      }
    };

    updateCards();

    window.addEventListener("resize", updateCards);

    return () => {
      window.removeEventListener("resize", updateCards);
    };
  }, []);

  // ==============================
  // MAX INDEX
  // ==============================
  const maxIndex = Math.max(data.length - cardsToShow, 0);

  // ==============================
  // NEXT
  // ==============================
  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return 0;
      }

      return prev + 1;
    });
  };

  // ==============================
  // PREVIOUS
  // ==============================
  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return maxIndex;
      }

      return prev - 1;
    });
  };

  // ==============================
  // AUTO SLIDE
  // ==============================
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  // ==============================
  // KEEP INDEX VALID
  // ==============================
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [maxIndex, currentIndex]);

  // ==============================
  // DOTS
  // ==============================
  const totalDots = maxIndex + 1;

  return (
    <section className="pt-16 sm:pt-20 md:pt-24 pb-10 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* ================= HEADING ================= */}

        <h2
          className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-bold
            text-center
            text-secondary
            mb-3
          "
        >
          Why Choose Electrodes Engineering?
        </h2>

        {/* ================= DESCRIPTION ================= */}

        <p
          className="
            text-center
            text-gray-500
            text-sm
            sm:text-base
            max-w-3xl
            mx-auto
            leading-7
            sm:leading-8
            mb-10
            md:mb-12
            px-2
          "
        >
          With years of industry experience, we have successfully completed
          numerous engineering projects, delivering reliable, innovative, and
          high-quality solutions that exceed our clients' expectations.
        </p>

        {/* ================= SLIDER ================= */}

        <div className="relative">

          {/* LEFT ARROW */}

          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous"
            className="
              absolute
              z-20
              left-1
              sm:-left-3
              lg:-left-5
              top-1/2
              -translate-y-1/2
              w-10
              h-10
              sm:w-11
              sm:h-11
              rounded-full
              bg-white
              shadow-xl
              flex
              items-center
              justify-center
              text-gray-700
              hover:bg-cyan-500
              hover:text-white
              transition-all
              duration-300
            "
          >
            <FaChevronLeft />
          </button>

          {/* ================= VIEWPORT ================= */}

          <div
            ref={sliderRef}
            className="overflow-hidden"
          >

            {/* ================= TRACK ================= */}

            <div
              className="
                flex
                transition-transform
                duration-700
                ease-in-out
              "
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
              }}
            >

              {data.map((item, index) => (

                <div
                  key={index}
                  className="
                    flex-shrink-0
                    w-full
                    sm:w-1/2
                    lg:w-1/4
                    px-2
                  "
                >

                  {/* ================= CARD ================= */}

                  <div
                    className="
                      w-full
                      bg-white
                      rounded-2xl
                      overflow-hidden
                      shadow-lg
                      border
                      border-gray-100
                      h-[330px]
                      sm:h-[360px]
                      md:h-[400px]
                    "
                  >

                    {/* IMAGE */}

                    <div
                      className="
                        w-full
                        h-[190px]
                        sm:h-[210px]
                        md:h-[235px]
                        overflow-hidden
                      "
                    >

                      <img
                        src={item.image}
                        alt={item.title}
                        className="
                          w-full
                          h-full
                          object-cover
                          object-center
                        "
                      />

                    </div>

                    {/* TITLE */}

                    <div
                      className="
                        h-[140px]
                        sm:h-[150px]
                        md:h-[165px]
                        flex
                        items-center
                        justify-center
                        px-5
                      "
                    >

                      <h3
                        className="
                          text-center
                          text-base
                          sm:text-lg
                          md:text-xl
                          font-bold
                          leading-snug
                          text-gray-900
                        "
                      >
                        {item.title}
                      </h3>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT ARROW */}

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next"
            className="
              absolute
              z-20
              right-1
              sm:-right-3
              lg:-right-5
              top-1/2
              -translate-y-1/2
              w-10
              h-10
              sm:w-11
              sm:h-11
              rounded-full
              bg-white
              shadow-xl
              flex
              items-center
              justify-center
              text-gray-700
              hover:bg-cyan-500
              hover:text-white
              transition-all
              duration-300
            "
          >
            <FaChevronRight />
          </button>

        </div>

        {/* ================= DOTS ================= */}

        <div className="flex justify-center items-center gap-2 mt-7">

          {Array.from({ length: totalDots }).map((_, index) => (

            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                rounded-full
                transition-all
                duration-300

                ${
                  currentIndex === index
                    ? "w-7 h-2 bg-cyan-500"
                    : "w-2 h-2 bg-gray-300 hover:bg-cyan-400"
                }
              `}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default PartnerSlider;