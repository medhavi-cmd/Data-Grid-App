import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h2 className="text-lg font-semibold mb-2">ShopSphere</h2>
          <p className="text-sm text-gray-500">
            Discover amazing products with a seamless shopping experience.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
          <ul className="text-sm text-gray-500 space-y-2">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">Products</li>
            <li className="hover:text-black cursor-pointer">Categories</li>
            <li className="hover:text-black cursor-pointer">About</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold mb-3">Contact</h3>
          <ul className="text-sm text-gray-500 space-y-2">
            <li>Email: support@shopsphere.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Gurgaon, India</li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t text-center text-sm text-gray-400 py-4">
        © {new Date().getFullYear()} ShopSphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;