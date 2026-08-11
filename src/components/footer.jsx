import { Link } from "react-router-dom";
import logo from "../assets/img/electrode.png";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
   <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company */}
       <div>
  <div className="mb-5">
    <h2 className="text-xl font-bold whitespace-nowrap">
      Electrodes Engineering Services
    </h2>

    <p className="text-sm text-gray-400 tracking-[3px]">
      (Pvt.) Ltd
    </p>
  </div>

  <p className="text-gray-400 leading-7">
    Electrodes Engineering Services provides Electrical,
    Mechanical, MEP, Renewable Energy, Earthing & Lightning
    Protection, Hydraulic Bollards and Industrial Trading
    solutions across Pakistan.
  </p>
</div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

          <ul className="space-y-3 text-gray-400">
            <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-cyan-400">About Us</Link></li>
            <li><Link to="/electrical" className="hover:text-cyan-400">Electrical</Link></li>
            <li><Link to="/mechanical" className="hover:text-cyan-400">Mechanical</Link></li>
            <li><Link to="/trading" className="hover:text-cyan-400">Trading</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Our Services</h3>

          <ul className="space-y-3 text-gray-400">
            <li>LV & MV Switchgear</li>
            <li>MEP Services</li>
            <li>Solar Energy</li>
            <li>Earthing & Lightning Protection</li>
            <li>Hydraulic Bollard Systems</li>
            <li>Turnstile Access Systems</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Contact Info</h3>
<div className="space-y-3 text-gray-400">

  <div className="flex items-start gap-3">
    <span>📍</span>
    <span>
      MC 14, Ghauri Town Phase VII, Block C, Akbar Enclave,
      Islamabad, Pakistan
    </span>
  </div>

  <div className="flex items-center gap-3">
    <span>📞</span>
    <span>+92 341 5233397</span>
  </div>

 <div className="flex items-center gap-3">
  <FaWhatsapp className="text-green-500 text-xl" />
  <a
    href="https://wa.me/923001234567"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-green-400 transition"
  >
    +92 333 5691813
  </a>
</div>

  <div className="flex items-center gap-3">
    <span>✉️</span>
    <span>info@electrodeseng.com</span>
  </div>

  <div className="flex items-center gap-3">
    <span>🌐</span>
    <span>www.electrodeseng.com</span>
  </div>

</div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} Electrodes Engineering Services (Pvt.) Ltd.
        All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;