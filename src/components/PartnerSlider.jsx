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
  {
    image: Img1,
    title: "Low Voltage (LV) Electrical Switchgear",
  },
  {
    image: Img2,
    title: "Solar Power System Installation",
  },
  {
    image: Img3,
    title: "Pad Mounted Transformer Installation",
  },
  {
    image: Img4,
    title: "Fire Fighting System",
  },
  {
    image: Img5,
    title: "HT PFI Panel",
  },
  {
    image: Img6,
    title: "Earthing System",
  },
  {
    image: Img7,
    title: "Cable Tray",
  },
  {
    image: Img8,
    title: "Hydraulic Bollard System 12K",
  },
  {
    image: Img10,
    title: "MDB",
  },
  {
    image: Img11,
    title: "FM-200 System",
  },
];

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -right-2 lg:-right-6 z-20
      -translate-y-1/2
      w-10 h-10 lg:w-12 lg:h-12
      rounded-full
      bg-white shadow-xl
      flex items-center justify-center
      cursor-pointer
      hover:bg-cyan-500 hover:text-white
      transition-all duration-300"
    >
      <FaChevronRight />
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -left-2 lg:-left-6 z-20
      -translate-y-1/2
      w-10 h-10 lg:w-12 lg:h-12
      rounded-full
      bg-white shadow-xl
      flex items-center justify-center
      cursor-pointer
      hover:bg-cyan-500 hover:text-white
      transition-all duration-300"
    >
      <FaChevronLeft />
    </button>
  );
}

const PartnerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,

    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    slidesToShow: 4,
    slidesToScroll: 1,

    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="pt-16 lg:pt-24 pb-0 bg-white">

      <div className="max-w-7xl mx-auto px-4 lg:px-12 relative">

        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondary mb-3">
          Why Choose Electrodes Engineering?
        </h2>

        <p className="text-center text-gray-500 mb-8 lg:mb-12 max-w-3xl mx-auto leading-8">
          With years of industry experience, we have successfully completed
          numerous engineering projects, delivering reliable, innovative,
          and high-quality solutions that exceed our clients' expectations.
        </p>

        {/* Slider */}
        <Slider {...settings}>

          {data.map((item, index) => (

            <div key={index} className="px-3">

              <div
                className="
                  rounded-3xl
                  overflow-hidden
                  shadow-lg
                  bg-white
                  h-[390px]
                  w-full
                  max-w-[360px]
                  mx-auto
                  flex
                  flex-col
                "
              >

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-56
                    md:h-64
                    object-cover
                    object-center
                  "
                />

                {/* Title */}
                <div className="flex-1 flex items-center justify-center px-5">

                  <h3 className="text-center text-xl md:text-2xl font-bold leading-snug">
                    {item.title}
                  </h3>

                </div>

              </div>

            </div>

          ))}

        </Slider>

      </div>

    </section>
  );
};

export default PartnerSlider;