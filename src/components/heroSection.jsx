import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Img1 from "../assets/img/lv.jpg";
import Img2 from "../assets/img/mep.jpg";
import Img3 from "../assets/img/solar1.jpeg";
import Img4 from "../assets/img/earthinglightning.jpg";

const slides = [
  {
    image: Img1,
    title: "LV & MV SWITCHGEAR",
    subtitle: "Reliable low and medium voltage electrical switchgear solutions.",
    position: "center",
  },
  {
    image: Img2,
    title: "MEP SERVICES",
    subtitle: "Complete mechanical, electrical and plumbing engineering solutions.",
    position: "center",
  },
  {
    image: Img3,
    title: "RENEWABLE ENERGY",
    subtitle: "Efficient solar and renewable energy solutions for modern projects.",
    position: "center",
  },
  {
    image: Img4,
    title: "EARTHING AND LIGHTNING PROTECTION",
    subtitle: "Professional earthing and lightning protection systems.",
    position: "center 70%",
  },
];

function NextArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        absolute
        right-4
        md:right-8
        top-1/2
        -translate-y-1/2
        z-30
        w-10
        h-10
        md:w-12
        md:h-12
        rounded-full
        bg-white/90
        shadow-lg
        flex
        items-center
        justify-center
        text-gray-800
        hover:bg-cyan-500
        hover:text-white
        transition
      "
    >
      <FaChevronRight />
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        absolute
        left-4
        md:left-8
        top-1/2
        -translate-y-1/2
        z-30
        w-10
        h-10
        md:w-12
        md:h-12
        rounded-full
        bg-white/90
        shadow-lg
        flex
        items-center
        justify-center
        text-gray-800
        hover:bg-cyan-500
        hover:text-white
        transition
      "
    >
      <FaChevronLeft />
    </button>
  );
}

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 900,

    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    slidesToShow: 1,
    slidesToScroll: 1,

    fade: true,
    pauseOnHover: false,
  };

  return (
    <section className="w-full overflow-hidden">

      <Slider {...settings}>

        {slides.map((slide, index) => (
          <div key={index}>

            <div
              className="
                relative
                w-full
                h-[500px]
                md:h-[600px]
                lg:h-[650px]
                bg-cover
                bg-center
              "
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: slide.position,
              }}
            >

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/45" />

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">

                <div className="max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16">

                  <div className="max-w-3xl">

                    <h1 className="
                      text-white
                      text-3xl
                      sm:text-4xl
                      md:text-5xl
                      lg:text-7xl
                      font-extrabold
                      leading-tight
                    ">
                      {slide.title}
                    </h1>

                    <p className="
                      mt-5
                      md:mt-6
                      text-base
                      md:text-lg
                      lg:text-xl
                      text-gray-200
                      max-w-2xl
                    ">
                      {slide.subtitle}
                    </p>

                    <div className="mt-6 md:mt-8 flex flex-wrap gap-4">

                      <a
                        href="/contact"
                        className="
                          px-6
                          md:px-8
                          py-3
                          rounded-full
                          bg-cyan-500
                          text-white
                          font-semibold
                          hover:bg-cyan-600
                          transition
                        "
                      >
                        Contact Us
                      </a>

                      <a
                        href="/electrical"
                        className="
                          px-6
                          md:px-8
                          py-3
                          rounded-full
                          border
                          border-white
                          text-white
                          font-semibold
                          hover:bg-white
                          hover:text-gray-900
                          transition
                        "
                      >
                        Our Services
                      </a>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        ))}

      </Slider>

    </section>
  );
};

export default HeroSection;