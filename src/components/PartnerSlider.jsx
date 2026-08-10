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
      type="button"
      onClick={onClick}
      className="
        absolute
        right-[-15px]
        md:right-[-20px]
        top-1/2
        -translate-y-1/2
        z-20
        w-12
        h-12
        md:w-14
        md:h-14
        rounded-full
        bg-white
        shadow-lg
        flex
        items-center
        justify-center
        text-gray-800
        hover:bg-gray-100
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
        left-[-15px]
        md:left-[-20px]
        top-1/2
        -translate-y-1/2
        z-20
        w-12
        h-12
        md:w-14
        md:h-14
        rounded-full
        bg-white
        shadow-lg
        flex
        items-center
        justify-center
        text-gray-800
        hover:bg-gray-100
      "
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
  speed: 800,

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
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};
  return (
    <section className="pt-20 pb-16 bg-white">

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-3">
          Why Choose Electrodes Engineering?
        </h2>

        {/* Description */}
        <p className="text-center text-gray-500 mb-12 max-w-3xl mx-auto leading-8 px-2">
          With years of industry experience, we have successfully completed
          numerous engineering projects, delivering reliable, innovative, and
          high-quality solutions that exceed our clients' expectations.
        </p>

        {/* Slider */}
        <Slider {...settings} className="partner-slider">

          {data.map((item, index) => (
            <div key={index} className="px-2 md:px-3">

              <div className="rounded-3xl overflow-hidden shadow-lg bg-white h-[430px] flex flex-col">

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover object-center"
                />

                {/* Title */}
                <div className="flex-1 flex items-center justify-center p-4">

                  <h3 className="text-center text-lg md:text-2xl font-bold leading-snug">
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