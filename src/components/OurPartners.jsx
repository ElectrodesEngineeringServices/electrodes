import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import lakecity from "../assets/img/army.png";
import ghani from "../assets/img/ACI.jpg";
import usapparel from "../assets/img/Bahira.png";
import fastcable from "../assets/img/DHA.jpg";
import doubletree from "../assets/img/dom.jpeg";
import topcity from "../assets/img/topcity.jpeg";
import zm from "../assets/img/ZM.jpg";

const OurPartners = () => {
  const partners = [
    {
      image: lakecity,
      name: "Army",
    },
    {
      image: ghani,
      name: "Abdullah City Islamabad",
    },
    {
      image: usapparel,
      name: "Bahria",
    },
    {
      image: fastcable,
      name: "DHA",
    },
    {
      image: doubletree,
      name: "Dominion",
    },
    {
      image: topcity,
      name: "Top City",
    },
    {
      image: zm,
      name: "ZM Builders",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,

    responsive: [
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-50 py-10 sm:py-12">

      {/* Heading */}
      <div className="text-center px-5 mb-8 sm:mb-10">

        <h2
          className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-bold
            text-gray-900
          "
        >
          Our Trusted Clients
        </h2>

        <p
          className="
            mt-3
            text-sm
            sm:text-base
            text-gray-600
            max-w-2xl
            mx-auto
          "
        >
          We are proud to work with leading organizations across Pakistan.
        </p>

      </div>

      {/* Partners Slider */}
      <div className="w-full max-w-6xl mx-auto px-5">

        <Slider {...settings}>

          {partners.map((partner, index) => (
            <div key={index} className="px-2 sm:px-3">

              {/* Card */}
              <div
                className="
                  bg-white
                  rounded-2xl
                  border
                  border-gray-100
                  shadow-sm
                  hover:shadow-lg
                  transition-all
                  duration-300
                  h-40
                  sm:h-44
                  md:h-48
                  flex
                  items-center
                  justify-center
                  p-6
                "
              >

                <img
                  src={partner.image}
                  alt={partner.name}
                  className="
                    w-full
                    h-full
                    max-w-[180px]
                    object-contain
                  "
                />

              </div>

            </div>
          ))}

        </Slider>

      </div>

    </section>
  );
};

export default OurPartners;