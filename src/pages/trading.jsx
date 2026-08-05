import TradingCard from "../components/tradingCard";
import tradingCard from "../data/tradingdataCard";

const Trading = () => {
//   const mechanicalCards = tradingCard.mechanicalProduct;
// const electricalCards = tradingCard.electricalProduct;
// const plumbingCards = tradingCard.plumbingProduct;

  return (
    <>
      {/* Hero */}

      <section className="pt-36 pb-24 bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900">

        <div className="max-w-[1500px] mx-auto px-6 text-center">

          {/* <span className="inline-block bg-cyan-600 text-white px-6 py-2 rounded-full uppercase tracking-[3px] font-semibold">
            Trading Division
          </span> */}

          <h1 className="text-5xl lg:text-6xl font-bold text-white mt-6">
            Industrial Trading Solutions
          </h1>

          <p className="mt-8 text-gray-300 text-lg leading-8 max-w-5xl mx-auto">
            We supply premium industrial products and solutions for commercial, industrial, and infrastructure projects, delivering exceptional quality, reliability, and on-time service.
          </p>

        </div>

      </section>

      {/* Mechanical */}

      <section className="py-20 bg-gray-100">

        <div className="max-w-[1500px] mx-auto px-6">

          <div className="text-center mb-14">

            {/* <h4 className="text-primary uppercase tracking-[3px] font-semibold">
              Our Products
            </h4> */}

            <h2 className="text-4xl font-bold text-secondary mt-3">
              Our Products
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">

            {tradingCard.map((card, index) => (
  <TradingCard
    key={index}
    image={card.image}
    name={card.name}
    description={card.description}
  />
))}
          </div>

        </div>

      </section>

      {/* Electrical */}

      {/* <section className="py-20 bg-white">

        <div className="max-w-[1500px] mx-auto px-6">

          <div className="text-center mb-14">

            <h4 className="text-primary uppercase tracking-[3px] font-semibold">
              Our Products
            </h4>

            <h2 className="text-4xl font-bold text-secondary mt-3">
              Electrical Products
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">

            {electricalCards.map((card, index) => (
              <TradingCard
  key={index}
  image={card.image}
  name={card.name}
  description={card.description}
/>
            ))}

          </div>

        </div>

      </section> */}

      {/* Plumbing */}

      {/* <section className="py-20 bg-gray-100">

        <div className="max-w-[1500px] mx-auto px-6">

          <div className="text-center mb-14">

            <h4 className="text-primary uppercase tracking-[3px] font-semibold">
              Our Products
            </h4>

            <h2 className="text-4xl font-bold text-secondary mt-3">
              Plumbing Products
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">

            {plumbingCards.map((card, index) => (
              <TradingCard
  key={index}
  image={card.image}
  name={card.name}
  description={card.description}
/>
            ))}

          </div>

        </div>

      </section> */}
    </>
  );
};

export default Trading;