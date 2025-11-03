import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleWhatsAppSend = () => {
    const phoneNumber = "916303130025"; // ✅ Replace with your WhatsApp number
    const text = `*New Inquiry from Retro Foods Website*\n\n👤 Name: ${form.name || "N/A"}\n📧 Email: ${
      form.email || "N/A"
    }\n💬 Message: ${form.message || "No message provided"}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  // 🔹 Google Maps link for directions
  const directionsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Charminar,+Hyderabad,+Telangana,+India";

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100 py-12 px-6">
      <section className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left Side - Image and Map */}
          <div className="relative flex flex-col justify-between">
            <img
              src="https://c8.alamy.com/comp/KA8KAA/stock-photo-of-diwali-food-or-diwali-snacks-or-diwali-sweets-like-KA8KAA.jpg"
              alt="Retro Foods Store"
              className="h-[20vh] md:h-[55vh] w-full object-cover"
            />

            {/* Map Section */}
            <div className="relative">
              <iframe
                title="Retro Foods Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4953036489967!2d78.48667111487554!3d17.38504408807506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb977f85b2e2fb%3A0x5f1e09b0e3a09b54!2sCharminar!5e0!3m2!1sen!2sin!4v1676000637084!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="hidden md:block"
              ></iframe>

              {/* ✅ Get Directions Button (Desktop only) */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-block absolute bottom-3 right-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
              >
                📍 Get Directions
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 md:p-12">
            <h2 className="text-4xl font-extrabold text-orange-700 mb-2">
              Contact Us
            </h2>
            <p className="text-slate-600 mb-6">
              Have a query, feedback, or bulk order? We’d love to hear from you!
            </p>

            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border border-orange-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-orange-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Type your message..."
                  className="w-full border border-orange-200 rounded-lg px-4 py-3 resize-none focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
            </div>

            <button
              onClick={handleWhatsAppSend}
              className="mt-6 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:scale-[1.02] transition-transform duration-200 shadow-md"
            >
              💬 Send Message on WhatsApp
            </button>

            <div className="mt-8 border-t border-orange-100 pt-5 text-center">
              <p className="text-slate-600 text-sm">
                📍 Hyderabad, Telangana, India
              </p>
              <p className="text-slate-600 text-sm mt-1">
                📞 +91 99999 99999 &nbsp; • &nbsp; 📧 info@crunchybites.in
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Map + Directions */}
      <div className="mt-10 md:hidden">
        <iframe
          title="Retro Foods Mobile Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4953036489967!2d78.48667111487554!3d17.38504408807506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb977f85b2e2fb%3A0x5f1e09b0e3a09b54!2sCharminar!5e0!3m2!1sen!2sin!4v1676000637084!5m2!1sen!2sin"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="rounded-xl shadow-md"
        ></iframe>

        {/* ✅ Get Directions Button (Mobile) */}
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-md"
        >
          📍 Get Directions
        </a>
      </div>
    </main>
  );
}
