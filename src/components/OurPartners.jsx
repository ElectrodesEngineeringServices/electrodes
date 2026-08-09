import lakecity from "../assets/img/army.png";
import ghani from "../assets/img/ACI.jpg";
import usapparel from "../assets/img/Bahira.png";
import fastcable from "../assets/img/DHA.jpg";
import doubletree from "../assets/img/dom.jpeg";
import topcity from "../assets/img/topcity.jpeg";
import zm from "../assets/img/ZM.jpg";

const OurPartners = () => {
  return (
    <section className="bg-gray-50 pt-8 pb-6">

      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900">
          Our Trusted Clients
        </h2>

        <p className="mt-3 text-gray-600">
          We are proud to work with leading organizations across Pakistan.
        </p>
      </div>

      {/* Logos */}
      <div className="flex justify-center items-center flex-wrap gap-x-10 gap-y-4">

        <img
          src={lakecity}
          alt="Army"
          className="w-24 h-24 object-contain"
        />

        <img
          src={ghani}
          alt="Abdullah City Islamabad"
          className="w-24 h-24 object-contain"
        />

        <img
          src={usapparel}
          alt="Bahria"
          className="w-24 h-24 object-contain"
        />

        <img
          src={fastcable}
          alt="DHA"
          className="w-24 h-24 object-contain"
        />

        <img
          src={doubletree}
          alt="Dominion"
          className="w-24 h-24 object-contain"
        />

        <img
          src={topcity}
          alt="Top City"
          className="w-24 h-24 object-contain"
        />

        <img
          src={zm}
          alt="ZM Builders"
          className="w-24 h-24 object-contain"
        />

      </div>

    </section>
  );
};

export default OurPartners;