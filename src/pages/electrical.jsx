import ImgComponent from "../components/imgComponent";

import electricalp1 from "../assets/img/hv.jpg";
import electricalp2 from "../assets/img/electricalP2.jpg";
import electricalp3 from "../assets/img/electricalP3.jpg";

import electricallv1 from "../assets/img/pc.jpg";
import electricallv2 from "../assets/img/PFI.jpg";
import electricallv3 from "../assets/img/MCC.jpg";

import spanal1 from "../assets/img/spanal1.jpg";
import spanal2 from "../assets/img/spanal2.jpg";
import spanal3 from "../assets/img/spanal3.jpg";
import earthing1 from "../assets/img/earth.jpeg";
import earthing2 from "../assets/img/earthing2.jpeg";
import earthing3 from "../assets/img/earthing3.jpeg";
import cctv from "../assets/img/cctv.jpg";
import cctv2 from "../assets/img/cctv2.jpg";
import cctv3 from "../assets/img/cctv3.jpg";

const Electrical = () => {
  return (
    <>
      {/* Hero */}

      <section className="pt-36 pb-24 bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900">

        <div className="max-w-[1500px] mx-auto px-6 text-center">

          {/* <span className="inline-block bg-cyan-600 text-white px-6 py-2 rounded-full uppercase tracking-[3px] font-semibold">
            Electrical Division
          </span> */}

          <h1 className="text-5xl lg:text-6xl font-bold text-white mt-6">
            Electrical Engineering Services
          </h1>

          <p className="mt-8 text-lg text-gray-300 leading-9 max-w-5xl mx-auto">
            Electrodes Engineering Services provides complete Electrical
            Engineering Solutions for commercial, industrial and infrastructure
            projects. Our expertise includes High Voltage Systems, Low Voltage
            Systems, Solar PV Solutions, Testing, Commissioning and complete
            turnkey electrical installations with international quality and
            safety standards.
          </p>

        </div>

      </section>

      {/* High Voltage */}

      <section className="bg-white">

        <div className="max-w-[1500px] mx-auto px-6">

          <ImgComponent
            
            heading="High Voltage Systems"
            mainParagraph="We provide complete supply, installation, testing and commissioning of High Voltage switchgear."

            listComponent={
              <ul className="list-disc ml-6 space-y-2">
                <li>11kV Panels</li>
                <li>Ring Main Units (RMU)</li>
                <li>Load break switch(LBS)</li>
                
              </ul>
            }

            images={[electricalp1, electricalp2, electricalp3]}
          />

        </div>

      </section>

      {/* Low Voltage */}

      <section className="bg-gray-50">

        <div className="max-w-[1500px] mx-auto px-6">

          <ImgComponent
            
            heading="Low Voltage Systems"

            mainParagraph="We provide complete supply, installation, testing and commissioning of Low Voltage switchgear."

            listComponent={
              <ul className="list-disc ml-6 space-y-2">
                <li>PCC Panel</li>
                <li>ATS Panel/AMF Panel</li>
                <li>MCC Panel</li>
                <li>PFI Panel</li>
                <li>Control Panel</li>
              </ul>
            }

            images={[electricallv1, electricallv2, electricallv3]}
          />

        </div>

      </section>

      {/* Solar */}

      <section className="bg-white">

        <div className="max-w-[1500px] mx-auto px-6">

          <ImgComponent
           
            heading="Solar PV Systems"

            mainParagraph="Electrodes Engineering Services provides complete Solar PV solutions including design, supply, installation, testing and maintenance for residential, commercial and industrial projects."

            listComponent={
              <ul className="list-disc ml-6 space-y-2">
                <li>On-Grid Solar Systems</li>
                <li>Off-Grid Solar Systems</li>
                <li>Hybrid Solar Solutions</li>
                <li>Net Metering</li>
                <li>Solar Maintenance & Monitoring</li>
              </ul>
            }

            images={[spanal1, spanal2, spanal3]}
          />

        </div>

      </section>
      {/* Earthing */}

<section className="bg-gray-50">

  <div className="max-w-[1500px] mx-auto px-6">

    <ImgComponent
      
      heading="Earthing & Lightning Protection Systems"

      mainParagraph="Electrodes Engineering Services provides complete earthing and lightning protection solutions to ensure the safety of electrical systems, equipment, and personnel. Our services include design, installation, testing, and maintenance in accordance with international standards."

      listComponent={
        <ul className="list-disc ml-6 space-y-2">
          <li>Conventional Earthing Systems</li>
          <li>Chemical Earthing Systems</li>
          <li>Lightning Protection Systems</li>
          <li>Earth Pit Installation & Testing</li>
          <li>Earth Resistance Measurement</li>
          <li>Copper Bonded Earth Rod Installation</li>
        </ul>
      }

      images={[earthing1, earthing2, earthing3]}
    />

  </div>

</section>
<section className="bg-gray-50">

  <div className="max-w-[1500px] mx-auto px-6">

    <ImgComponent

      heading="CCTV Surveillance & Security Systems"

      mainParagraph="Electrodes Engineering Services provides comprehensive CCTV surveillance and security solutions for commercial, industrial, residential, and high-security facilities. Our services include system design, supply, installation, configuration, testing, and maintenance of reliable surveillance systems to enhance security, monitoring, and asset protection."

      listComponent={
        <ul className="list-disc ml-6 space-y-2">
          <li>IP & Analog CCTV Camera Systems</li>
          <li>High-Definition & Night Vision Cameras</li>
          <li>Network Video Recorder (NVR) Systems</li>
          <li>DVR-Based Surveillance Systems</li>
          <li>Remote Monitoring & Mobile Access</li>
          <li>CCTV Installation, Testing & Maintenance</li>
        </ul>
      }

      images={[cctv, cctv2, cctv3]}

    />

  </div>

</section>
    </>
  );
};

export default Electrical;