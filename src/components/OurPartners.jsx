import lakecity from "../assets/img/army.png";
import ghani from "../assets/img/ACI.jpg";
import usapparel from "../assets/img/Bahira.png";
import fastcable from "../assets/img/DHA.jpg";
import doubletree from "../assets/img/dom.jpeg";
import topcity from "../assets/img/topcity.jpeg";
import zm from "../assets/img/ZM.jpg";

const OurPartners = () => {
  const partners = [
    { image: lakecity, alt: "Army" },
    { image: ghani, alt: "Abdullah City Islamabad" },
    { image: usapparel, alt: "Bahria" },
    { image: fastcable, alt: "DHA" },
    { image: doubletree, alt: "Dominion" },
    { image: topcity, alt: "Top City" },
    { image: zm, alt: "ZM Builders" },
  ];

  return (
    <section className="bg-gray-50 pt-8 pb-8">

      {/* Heading */}
      <div className="text-center mb-8 px-4">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Our Trusted Clients
        </h2>

        <p className="mt-3 text-sm sm:text-base text-gray-600">
          We are proud to work with leading organizations across Pakistan.
        </p>

      </div>

      {/* Logos */}
      <div
        className="
          max-w-5xl
          mx-auto
          px-4
          grid
          grid-cols-3
          sm:grid-cols-4
          md:grid-cols-5
          lg:grid-cols-7
          gap-4
          sm:gap-6
          items-center
        "
      >

        {partners.map((partner, index) => (
          <div
            key={index}
            className="
              flex
              items-center
              justify-center
              h-24
              sm:h-28
              bg-white
              rounded-xl
              shadow-sm
              hover:shadow-md
              transition-all
              duration-300
              p-2
            "
          >
            <img
              src={partner.image}
              alt={partner.alt}
              className="
                w-20
                h-20
                sm:w-24
                sm:h-24
                object-contain
              "
            />
          </div>
        ))}

      </div>

    </section>
  );
};

export default OurPartners;