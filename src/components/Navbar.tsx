import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, Send } from "lucide-react";
import { useCart } from "../context/CartContext"; // ✅ adjust path if needed

export default function Navbar() {
  const loc = useLocation();
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [user, setUser] = useState({ name: "", phone: "", address: "" });

  const { state } = useCart(); // ✅ use your state structure
  const cartItems = state.items; // ✅ extract items

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) alert(`Searching for: ${search}`);
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // ✅ WhatsApp send logic
  const handleWhatsAppSend = () => {
    if (!user.name || !user.phone || !user.address) {
      alert("Please fill all details before sending.");
      return;
    }

    const cartText = cartItems
      .map(
        (item, i) =>
          `${i + 1}. ${item.name} - ${item.weight} (${item.qty}x) ₹${
            item.unitPrice * item.qty
          }`
      )
      .join("\n");

    const total = cartItems.reduce(
      (t, i) => t + i.unitPrice * i.qty,
      0
    );

    const message = `🧾 *Retro Foods Order*\n\n👤 Name: ${user.name}\n📞 Phone: ${
      user.phone
    }\n🏠 Address: ${user.address}\n\n🛍️ *Items:*\n${cartText}\n\n💰 Total: ₹${total}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/91${user.phone}?text=${encoded}`, "_blank");
    setShowPopup(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FFF8F0]/90 backdrop-blur-md border-b border-amber-200 shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 flex items-center justify-center text-white font-bold shadow-md">
            RF
          </div>
          <div>
            <div className="font-extrabold text-[#78350F] text-lg tracking-wide">
              Retro Foods
            </div>
            <div className="text-xs text-[#a16207]">
              Handcrafted Snacks, Modern Taste
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-md font-medium transition-all ${
                loc.pathname === link.path
                  ? "bg-gradient-to-r from-amber-500 to-yellow-400 text-white shadow-md"
                  : "text-[#3F3F46] hover:text-amber-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="hidden sm:flex items-center border border-amber-300 rounded-full bg-white/80 overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-amber-400"
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="px-4 py-2 outline-none text-sm w-36 md:w-48 bg-transparent"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white px-3 py-2 hover:opacity-90 transition"
            >
              <Search size={18} />
            </button>
          </form>

          {/* 🛒 Cart Button */}
          {/* 🛒 Cart Button */}
<Link
  to="/cart"
  className="relative p-2 text-amber-700 hover:text-amber-800 transition"
>
  <ShoppingCart size={26} />
  {cartItems.length > 0 && (
    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
      {cartItems.length}
    </span>
  )}
</Link>


          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-amber-700 hover:text-amber-800 transition"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FFF8F0] border-t border-amber-200 shadow-lg animate-slideDown">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block px-5 py-3 text-sm font-medium ${
                loc.pathname === link.path
                  ? "bg-amber-100 text-amber-800"
                  : "text-[#3F3F46] hover:bg-amber-50 hover:text-amber-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {/* 🧾 WhatsApp Order Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
            <h2 className="text-lg font-bold mb-3 text-amber-700">
              🧾 Complete Your Order
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="w-full mb-2 border border-amber-300 rounded-md p-2"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
              className="w-full mb-2 border border-amber-300 rounded-md p-2"
            />
            <textarea
              placeholder="Full Address with Pin Code"
              value={user.address}
              onChange={(e) => setUser({ ...user, address: e.target.value })}
              className="w-full mb-3 border border-amber-300 rounded-md p-2"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 rounded-md border border-amber-300 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleWhatsAppSend}
                className="px-4 py-2 rounded-md bg-green-500 text-white flex items-center gap-2"
              >
                <Send size={16} /> Send WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
