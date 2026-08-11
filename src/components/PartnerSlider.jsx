import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

function NextArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Next slide"
      className="
        !flex
        absolute
        top-1/2
        right-2
        md:-right-5
        z-30
        -translate-y-1/2
        w-9
        h-9
        md:w-12
        md:h-12
        rounded-full
        bg-white
        shadow-xl
        items-center
        justify-center
        text-gray-700
        hover:bg-cyan-500
        hover:text-white
        transition-all
        duration-300
      "
    >
      <FaChevronRight className="text-sm md:text-base" />
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Previous slide"
      className="
        !flex
        absolute
        top-1/2
        left-2
        md:-left-5
        z-30
        -translate-y-1/2
        w-9
        h-9
        md:w-12
        md:h-12
        rounded-full
        bg-white
        shadow-xl
        items-center
        justify-center
        text-gray-700
        hover:bg-cyan-500
        hover:text-white
        transition-all
        duration-300
      "
    >
      <FaChevronLeft className="text-sm md:text-base" />
    </button>
  );
}

const PartnerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 700,

    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    slidesToShow: 4,
    slidesToScroll: 1,

    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <section className="pt-16 sm:pt-20 md:pt-24 pb-8 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">

        {/* Heading */}
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

        {/* Description */}
        <p
          className="
            text-center
            text-gray-500
            text-sm
            sm:text-base
            mb-8
            sm:mb-10
            md:mb-12
            max-w-3xl
            mx-auto
            leading-7
            sm:leading-8
            px-2
          "
        >
          With years of industry experience, we have successfully completed
          numerous engineering projects, delivering reliable, innovative, and
          high-quality solutions that exceed our clients' expectations.
        </p>

        {/* Slider */}
        <div className="w-full">

          <Slider {...settings}>

            {data.map((item, index) => (

              <div key={index} className="px-2">

                {/* CARD */}
                <div
                  className="
                    w-full
                    rounded-2xl
                    overflow-hidden
                    shadow-lg
                    bg-white
                    border
                    border-gray-100
                    flex
                    flex-col

                    h-[360px]
                    sm:h-[380px]
                    md:h-[420px]
                  "
                >

                  {/* IMAGE */}
                  <div className="w-full h-[210px] sm:h-[230px] md:h-64 shrink-0">

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
                      flex-1
                      flex
                      items-center
                      justify-center
                      px-5
                      py-4
                    "
                  >

                    <h3
                      className="
                        text-center
                        text-lg
                        sm:text-xl
                        md:text-2xl
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

          </Slider>

        </div>

      </div>

    </section>
  );
};

export default PartnerSlider;