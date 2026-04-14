import React from "react";
import { Mail, Phone, MapPin, Heart, Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-red-100 bg-linear-to-b from-[#FFF5F5] via-white to-white">

      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-12 md:grid-cols-2">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Browsely
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-sm">
            Discover curated products with a seamless and modern browsing experience.
          </p>

          {/* subtle accent line */}
          <div className="w-12 h-1 bg-[#FF6B6B] rounded-full mt-5">dvbeufvbe</div>
        </div>

        {/* Contact */}
        <div className="md:justify-self-end">
          <h3 className="text-sm uppercase tracking-widest text-gray-400 font-semibold mb-5">
            Contact
          </h3>

          <ul className="text-sm md:text-base text-gray-700 space-y-4">

            <li className="flex items-center gap-3 group">
              <Mail className="w-4 h-4 text-[#FF6B6B] group-hover:scale-110 transition" />
              <span className="group-hover:text-black transition">
                support@browsely.com
              </span>
            </li>

            <li className="flex items-center gap-3 group">
              <Phone className="w-4 h-4 text-[#FF6B6B] group-hover:scale-110 transition" />
              <span className="group-hover:text-black transition">
                +91 11111 22222
              </span>
            </li>

            <li className="flex items-center gap-3 group">
              <MapPin className="w-4 h-4 text-[#FF6B6B] group-hover:scale-110 transition" />
              <span className="group-hover:text-black transition">
                Gurgaon, India
              </span>
            </li>

          </ul>
        </div>

      </div>

      {/* Bottom bar */}
        <div className="border-t border-red-100 text-sm text-gray-500 py-5 bg-white/70 backdrop-blur-md flex justify-center items-center gap-2">

        {/* Copyright */}
        <span className="flex items-center gap-1 font-medium text-gray-700">
            <Copyright size={14} />
            {new Date().getFullYear()} Browsely
        </span>

        <span>• Crafted with</span>
        <Heart
            className="w-4 h-4 text-[#bf3b3b] fill-[#bf3b3b]"
            strokeWidth={2}
        />
        <span>for seamless browsing</span>

        </div>

    </footer>
  );
};

export default Footer;