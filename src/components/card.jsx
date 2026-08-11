import { Link } from "react-router-dom";

const Card = ({ image, name, description, link }) => {
  return (
    <div
      className="
        group
        w-full
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-500
      "
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="
            w-full
            h-48
            sm:h-56
            md:h-64
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />
      </div>

      {/* Content */}
      <div
        className="
          flex
          flex-col
          items-center
          justify-center
          text-center
          min-h-[220px]
          sm:min-h-[250px]
          md:min-h-[280px]
          p-5
          sm:p-6
        "
      >
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
          {name}
        </h3>

        <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
          {description}
        </p>

        {link && (
          <Link
            to={link}
            className="
              mt-5
              inline-block
              px-6
              py-2.5
              rounded-full
              bg-cyan-500
              text-white
              font-semibold
              hover:bg-cyan-600
              transition
            "
          >
            Learn More
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;