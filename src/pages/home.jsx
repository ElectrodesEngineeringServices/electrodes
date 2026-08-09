import HeroSection from "../components/heroSection";
import Card from "../components/card";
import cardData from "../data/data";
import PartnerSlider from "../components/PartnerSlider";
import OurPartners from "../components/OurPartners";

const Home = () => {
  const cards = cardData.cardDataHome;

  return (
    <>
      {/* ================= HERO ================= */}
      <HeroSection />

      {/* ================= COMPANY INTRO ================= */}
      <section className="bg-gray-100 pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h4 className="text-primary uppercase tracking-[5px] font-semibold">
            Trusted Engineering Partner
          </h4>

          <h2 className="text-5xl font-bold text-secondary mt-4 leading-tight">
            Engineering Beyond Expectations
          </h2>

          <p className="mt-8 text-gray-600 max-w-4xl mx-auto leading-8 text-lg">
            From concept to completion, we provide complete Engineering,
            Procurement, Installation, and Maintenance solutions. Our
            commitment to quality, innovation, and client satisfaction has
            made us a reliable partner for industrial and commercial
            projects across Pakistan.
          </p>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-gray-100 pt-16 pb-12">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-10">

            <h4 className="text-primary uppercase tracking-[3px] font-semibold">
              Our Services
            </h4>

            <h2 className="text-4xl font-bold text-secondary mt-3">
              What We Offer
            </h2>

            <p className="text-gray-600 mt-4">
              Professional engineering solutions for industrial,
              commercial and infrastructure projects.
            </p>

          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">

            {cards.map((card, index) => (
              <Card
                key={index}
                image={card.image}
                name={card.name}
                description={card.description}
                link={card.link}
              />
            ))}

          </div>

        </div>

      </section>

      {/* ================= PROJECT SLIDER ================= */}
      <PartnerSlider />

      {/* ================= OUR CLIENTS ================= */}
      <OurPartners />

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-secondary text-white py-12">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-primary text-5xl font-bold">
                10+
              </h2>
              <p className="mt-3">
                Years Experience
              </p>
            </div>

            <div>
              <h2 className="text-primary text-5xl font-bold">
                500+
              </h2>
              <p className="mt-3">
                Completed Projects
              </p>
            </div>

            <div>
              <h2 className="text-primary text-5xl font-bold">
                100%
              </h2>
              <p className="mt-3">
                Client Satisfaction
              </p>
            </div>

            <div>
              <h2 className="text-primary text-5xl font-bold">
                24/7
              </h2>
              <p className="mt-3">
                Technical Support
              </p>
            </div>

          </div>

        </div>

      </section>

    </>
  );
};

export default Home;