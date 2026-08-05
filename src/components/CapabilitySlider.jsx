import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Img1 from "../assets/img/solar.jpg";
import Img2 from "../assets/img/solar.jpg";
import Img3 from "../assets/img/solar.jpg";
import Img4 from "../assets/img/solar.jpg";

const data = [
  { title: "Quality Checking", image: Img1 },
  { title: "Testing", image: Img2 },
  { title: "Latest Technology", image: Img3 },
  { title: "Laser Cutting", image: Img4 },
  { title: "Solar Systems", image: Img1 },
  { title: "LV Switchgear", image: Img2 },
  { title: "MV Switchgear", image: Img3 },
  { title: "MEP Services", image: Img4 },
];
export default function CapabilitySlider() {
  const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 800,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
};

  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h4 className="uppercase tracking-[4px] text-primary font-semibold">
            Our Capabilities
          </h4>

          <h2 className="text-4xl font-bold text-secondary mt-3">
            Engineering Excellence
          </h2>

          <p className="text-gray-600 mt-4">
            Quality, Innovation & Professional Engineering Services
          </p>

        </div>

        <Slider {...settings}>

          {data.map((item, index) => (

            <div key={index} className="px-3">

              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group">

                <div className="overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>

                <div className="p-6 text-center">

                  <h3 className="text-xl font-bold text-secondary">
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
}