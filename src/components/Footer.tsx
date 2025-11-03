import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-50 to-[#FFF8F0] border-t border-amber-200 pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
              RF
            </div>
            <h2 className="text-xl font-extrabold text-[#78350F]">Retro Foods</h2>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            Premium handcrafted Indian snacks — made with love, heritage, and a touch of modern flavor.
          </p>
          <div className="flex items-center gap-4 mt-5">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-full bg-amber-100 text-amber-700 hover:bg-amber-500 hover:text-white transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-amber-700 mb-4">Quick Links</h3>
          {["Home", "About Us", "Products", "Contact"].map((item, i) => (
            <a
              key={i}
              href={`/${item.toLowerCase().replace(" ", "")}`}
              className="block text-slate-600 text-sm mb-2 hover:text-amber-600 transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-amber-700 mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-center gap-3"><MapPin size={16} className="text-amber-600" /> Vijayawada, AP</li>
            <li className="flex items-center gap-3"><Phone size={16} className="text-amber-600" /> +91 98765 43210</li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-amber-600" /> hello@retrofoods.in</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-amber-700 mb-4">Stay Updated</h3>
          <form className="flex items-center bg-white border border-amber-300 rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-amber-400 shadow-sm">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 w-full outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white px-4 py-2 hover:opacity-90 transition flex items-center gap-1"
            >
              <Send size={16} /> Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-amber-100 mt-10 pt-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} <span className="font-semibold text-amber-600">Retro Foods</span> — Crafted with ❤️ in India.
      </div>
    </footer>
  );
}
