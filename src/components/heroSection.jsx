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
    subtitle:
      "Reliable low and medium voltage electrical switchgear solutions.",
    position: "center",
  },
  {
    image: Img2,
    title: "MEP SERVICES",
    subtitle:
      "Complete mechanical, electrical and plumbing engineering solutions.",
    position: "center",
  },
  {
    image: Img3,
    title: "RENEWABLE ENERGY",
    subtitle:
      "Efficient solar and renewable energy solutions for modern projects.",
    position: "center",
  },
  {
    image: Img4,
    title: "EARTHING AND LIGHTNING PROTECTION",
    subtitle:
      "Professional earthing and lightning protection systems.",
    position: "center 70%",
  },
];

function NextArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Next slide"
      style={{
        position: "absolute",
        right: "12px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 30,
      }}
      className="
        !flex
        items-center
        justify-center
        w-10
        h-10
        sm:w-11
        sm:h-11
        md:w-12
        md:h-12
        rounded-full
        bg-black/50
        hover:bg-cyan-500
        text-white
        transition-all
        duration-300
        shadow-lg
      "
    >
      <FaChevronRight className="text-base sm:text-lg" />
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Previous slide"
      style={{
        position: "absolute",
        left: "12px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 30,
      }}
      className="
        !flex
        items-center
        justify-center
        w-10
        h-10
        sm:w-11
        sm:h-11
        md:w-12
        md:h-12
        rounded-full
        bg-black/50
        hover:bg-cyan-500
        text-white
        transition-all
        duration-300
        shadow-lg
      "
    >
      <FaChevronLeft className="text-base sm:text-lg" />
    </button>
  );
}

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 700,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <section className="w-full overflow-hidden">
      <div className="relative w-full">

        <Slider {...settings}>

          {slides.map((slide, index) => (
            <div key={index}>

              <div
                className="
                  relative
                  w-full
                  h-[520px]
                  sm:h-[560px]
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

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <div className="relative z-10 h-full flex items-center">

                  <div
                    className="
                      w-full
                      max-w-7xl
                      mx-auto
                      px-5
                      sm:px-8
                      md:px-10
                      lg:px-16
                    "
                  >

                    {/* Mobile par upar, desktop par center */}
                   <div
  className="
    max-w-3xl
    -translate-y-24
    sm:-translate-y-14
    md:translate-y-0
  "
>

                      {/* Heading */}
                      <h1
                        className="
                          text-white
                          text-2xl
                          sm:text-3xl
                          md:text-5xl
                          lg:text-7xl
                          font-extrabold
                          leading-tight
                        "
                      >
                        {slide.title}
                      </h1>

                      {/* Subtitle */}
                      <p
                        className="
                          mt-3
                          sm:mt-4
                          md:mt-6
                          text-sm
                          sm:text-base
                          md:text-lg
                          lg:text-xl
                          leading-relaxed
                          text-gray-200
                          max-w-2xl
                        "
                      >
                        {slide.subtitle}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </Slider>

      </div>
    </section>
  );
};

export default HeroSection;