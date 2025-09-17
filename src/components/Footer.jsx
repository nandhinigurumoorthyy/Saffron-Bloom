import { PiWhatsappLogo, PiMetaLogo, PiYoutubeLogo, PiInstagramLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-[#89150c] text-gray-200 px-10 py-14">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">

        {/* Brand Info */}
        <div className="md:w-1/3 lg:w-1/4 flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <div className="flex items-center gap-2 text-white text-3xl font-semibold">
            Saffron Bloom
          </div>
          <div className="italic text-[#D4BFAA] text-xs">Let Your Senses Blossom</div>
          <p className="text-sm leading-relaxed max-w-xs">
            Our saffron blooms rich, fragrant, and vibrant — a symphony crafted with passion. Elevate your dishes into masterpieces of taste and aroma.
          </p>
        </div>

        {/* Link Sections */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 w-full">

          {/* Company */}
          <section>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Corporate</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Team</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Sitemap</a></li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Help & Support</a></li>
              <li><a href="#" className="hover:underline">Partner with us</a></li>
            </ul>
          </section>

          {/* Legal */}
          <section>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Cookie Policy</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Report Abuse</a></li>
              <li><a href="#" className="hover:underline">Saffron Quality Standards</a></li>
              <li><a href="#" className="hover:underline">Return & Refund Policy</a></li>
              <li><a href="#" className="hover:underline">Certification</a></li>
            </ul>
          </section>

          {/* Available In */}
          <section>
            <h4 className="font-semibold mb-3">Available In</h4>
            <ul className="space-y-2 text-sm">
              <li>Chennai</li>
              <li>Mumbai</li>
              <li>Kolkata</li>
              <li>Hyderabad</li>
              <li>Bangalore</li>
            </ul>
          </section>

          {/* Saffron Cultivation & Care */}
          <section>
            <h4 className="font-semibold mb-3">Saffron Cultivation & Care</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Planting & Growing</a></li>
              <li><a href="#" className="hover:underline">Harvesting Process</a></li>
              <li><a href="#" className="hover:underline">Drying & Storage</a></li>
              <li><a href="#" className="hover:underline">Quality Standards</a></li>
              <li><a href="#" className="hover:underline">Organic Farming Tips</a></li>
              <li><a href="#" className="hover:underline">FAQs & Support</a></li>
            </ul>
          </section>
        </div>

      </div>

      {/* Social Links */}
      <div className="max-w-7xl mx-auto mt-12 flex justify-center gap-8 text-3xl text-[#D4BFAA]">
        <a  href="" aria-label="WhatsApp" className="hover:text-white"><PiWhatsappLogo /></a>
        <a href="" aria-label="Meta" className="hover:text-white"><PiMetaLogo /></a>
        <a href="" aria-label="YouTube" className="hover:text-white"><PiYoutubeLogo /></a>
        <a href="" aria-label="Instagram" className="hover:text-white"><PiInstagramLogo /></a>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-8 text-center text-xs text-[#D4BFAA] select-none">
        &copy; {new Date().getFullYear()} Saffron Bloom. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
