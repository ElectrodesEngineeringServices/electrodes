import ImgComponent from "../components/imgComponent";
import CenteredContent from "../components/centeredContent";

import fire1 from "../assets/img/firef1.jpg";
import fire2 from "../assets/img/firef2.jpg";
import fire3 from "../assets/img/firef3.jpg";

import hvac1 from "../assets/img/hvac1.jpg";
import hvac2 from "../assets/img/hvac2.jpg";
import hvac3 from "../assets/img/hvac3.jpg";

import cabletray1 from "../assets/img/cabletray4.jpg";
import cabletray2 from "../assets/img/cabletray2.jpg";
import cabletray3 from "../assets/img/cabletray5.jpg";
import pumping1 from "../assets/img/plumbing1.jpg";
import pumping2 from "../assets/img/plumbing2.jpg";
import pumping3 from "../assets/img/plumbing3.jpg";

import pumping4 from "../assets/img/pumping4.jpeg";
import pumping5 from "../assets/img/pumping5.jpeg";
import pumping6 from "../assets/img/pumping6.jpeg";

import bollard1 from "../assets/img/hydulic.jpeg";
import bollard2 from "../assets/img/hydrulic2.jpeg";
import bollard3 from "../assets/img/hydrulic3.jpeg";

import access1 from "../assets/img/pole.jpeg";
import access2 from "../assets/img/pole2.jpeg";
import access3 from "../assets/img/pole3.jpg";

const Mechanical = () => {

 

  return (
    <>

      {/* Hero */}

      <section className="pt-36 pb-24 bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900">

        <div className="max-w-[1500px] mx-auto px-6 text-center">

         

          <h1 className="text-5xl lg:text-6xl font-bold text-white mt-6">
            Mechanical Engineering Services
          </h1>

          <p className="mt-8 text-gray-300 text-lg leading-8 max-w-4xl mx-auto">
            Electrodes Engineering Services provides complete mechanical engineering solutions for commercial, industrial and infrastructure projects.

Our expertise includes Fire Fighting Systems, HVAC Solutions, Cable Tray Installation, Industrial Piping, Structural Fabrication and Mechanical Equipment Installation.

From design and engineering to installation, testing and commissioning, we deliver reliable turnkey mechanical solutions with international quality standards.
          </p>

        </div>

      </section>

      {/* Intro */}

      

      {/* Fire */}

      <section className="bg-white">

        <div className="max-w-[1500px] mx-auto px-6">

          <ImgComponent
            heading="Fire Fighting Systems"
            

            mainParagraph="Electrodes Engineering Services provides complete design, supply, installation, testing and commissioning of modern fire protection systems for commercial and industrial facilities."

            listComponent={
              <ul className="list-disc ml-6 space-y-2">
                <li>Fire Detection & Alarm Systems</li>
                <li>Fire Hydrant Systems</li>
                <li>Automatic Sprinkler Systems</li>
                <li>Fire Pumps</li>
              </ul>
            }

            images={[fire1, fire2, fire3]}
          />

        </div>

      </section>

      {/* HVAC */}

      <section className="bg-gray-50">

        <div className="max-w-[1500px] mx-auto px-6">

          <ImgComponent
            heading="HVAC Systems"
            
            mainParagraph="We provide energy-efficient HVAC solutions including system design, installation, maintenance and commissioning for residential, commercial and industrial buildings."

            listComponent={
              <ul className="list-disc ml-6 space-y-2">
                <li>Central Air Conditioning</li>
                <li>Ventilation Systems</li>
                <li>Duct Installation</li>
                <li>Maintenance Services</li>
              </ul>
            }

            images={[hvac1, hvac2, hvac3]}
          />

        </div>

      </section>

      {/* Cable Tray */}

      <section className="bg-white">

        <div className="max-w-[1500px] mx-auto px-6">

          <ImgComponent
            heading="Cable Tray "
           

            mainParagraph="We supply and install cable trays, cable ladders, panel supports, solar panel structures and complete industrial electrical panel systems."

            listComponent={
              <ul className="list-disc ml-6 space-y-2">
                <li>Cable Tray Systems</li>
                <li>Cable Ladders</li>
                <li>Solar Mounting Structures</li>
                <li>Electrical Panels</li>
              </ul>
            }

            images={[cabletray1, cabletray2, cabletray3]}
          />

        </div>

      </section>
      <section className="bg-gray-50">

  <div className="max-w-[1500px] mx-auto px-6">

    <ImgComponent
     
      heading="Plumbing Systems"

      mainParagraph="We provide complete plumbing design, installation, testing and maintenance services for residential, commercial and industrial buildings. Our experienced team ensures reliable water distribution, drainage and sanitary solutions."

      listComponent={
        <ul className="list-disc ml-6 space-y-2">
          <li>Water Supply Networks</li>
          <li>Drainage Systems</li>
          <li>Sanitary Installations</li>
          <li>Pipe Fittings & Fixtures</li>
          <li>Maintenance & Repair Services</li>
        </ul>
      }

      images={[pumping1, pumping2, pumping3]}
    />

  </div>

</section>
<section className="bg-white">

  <div className="max-w-[1500px] mx-auto px-6">

    <ImgComponent
      
      heading="Utility & Distribution Systems"

      mainParagraph="Electrodes Engineering Services undertakes the complete supply, installation, testing and commissioning of underground and above-ground utility systems for residential, commercial and industrial developments."

      listComponent={
        <ul className="list-disc ml-6 space-y-2">
          <li>Sewerage Systems</li>
          <li>Water Supply Systems</li>
          <li>Natural Gas Distribution</li>
          <li>Storm Water Drainage</li>
          <li>Pumping Stations</li>
        </ul>
      }

      images={[pumping4, pumping5, pumping6]}
    />

  </div>

</section>
{/* Hydraulic Bollard Systems */}

<section className="bg-gray-50">

  <div className="max-w-[1500px] mx-auto px-6">

    <ImgComponent
      
      heading="Hydraulic Automatic Bollard System (K12)"

      mainParagraph="Electrodes Engineering Services provides complete Hydraulic Automatic Bollard System solutions for high-security commercial, industrial, and government facilities. Our services include system design, supply, installation, testing, commissioning, and maintenance to ensure reliable vehicle access control and maximum perimeter security."

      listComponent={
        <ul className="list-disc ml-6 space-y-2">
          <li>Automatic Hydraulic Bollard Installation</li>
          <li>Vehicle Access Control Systems</li>
          <li>Remote & Push Button Operation</li>
          <li>Control Panel & Hydraulic Power Unit</li>
         
        </ul>
      }

      images={[bollard1, bollard2, bollard3]}
    />

  </div>

</section>
{/* Access Control Systems */}

<section className="bg-white">

  <div className="max-w-[1500px] mx-auto px-6">

    <ImgComponent
      
      heading="Access Control & Turnstile Systems"

      mainParagraph="Electrodes Engineering Services provides complete Access Control and Turnstile System solutions for commercial, industrial, and high-security facilities. Our services include system design, supply, installation, testing, commissioning, and maintenance to ensure secure, efficient, and controlled access for employees and visitors."

      listComponent={
        <ul className="list-disc ml-6 space-y-2">
          <li>Tripod Turnstile Systems</li>
          <li>Flap Barrier & Swing Gate Systems</li>
          <li>RFID Card & Biometric Access Control</li>
          <li>Face Recognition Attendance Systems</li>
          <li>Visitor Management Solutions</li>
          
        </ul>
      }

      images={[access1, access2, access3]}
    />

  </div>

</section>
<section className="bg-white">

  <div className="max-w-[1500px] mx-auto px-6">

    <ImgComponent
      heading="High Mast Pole"

      mainParagraph="Electrodes Engineering Services provides complete High Mast Pole solutions for industrial, commercial, infrastructure, and outdoor lighting projects. Our services include the supply, installation, testing, and commissioning of high mast lighting systems designed to provide reliable, uniform, and energy-efficient illumination for large outdoor areas."

      listComponent={
        <ul className="list-disc ml-6 space-y-2">
          <li>High Mast Pole Supply & Installation</li>
          <li>High-Performance LED Flood Lighting</li>
          <li>Raising & Lowering Lighting Systems</li>
          <li>Outdoor & Industrial Area Lighting</li>
          <li>Testing, Commissioning & Maintenance</li>
        </ul>
      }

      images={[access1, access2, access3]}
    />

  </div>

</section>
    </>
  );
};

export default Mechanical;