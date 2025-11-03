import  { useState } from 'react';
import { useCart } from '../context/CartContext';
import { buildWhatsAppMessage } from "../utils/whstsapp"
import { FaWhatsapp } from 'react-icons/fa';

export default function Checkout() {
  const { state, dispatch } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);

  const items = state.items.map((i) => ({
    name: i.name,
    variant: i.variant.weight,
    qty: i.qty,
    price: i.variant.price,
  }));

  // Capture user GPS location
  const captureLocation = () => {
    if (!navigator.geolocation) return alert('Geolocation not supported');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      () => alert('Could not get location')
    );
  };

  // WhatsApp integration
  const handleWhatsApp = () => {
    if (!name || !phone || !address || !pincode)
      return alert('Please fill all required fields');

    const url = buildWhatsAppMessage(
      { name, phone, address, pincode, lat: coords?.lat, lng: coords?.lng },
      items
    );
    window.open(url, '_blank');
    dispatch({ type: 'CLEAR' });
  };

  const total = state.items.reduce((s, i) => s + i.qty * i.variant.price, 0);

  return (
    <main className="max-w-5xl mx-auto py-12 px-4 md:px-8">
      <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-8 bg-white/80 rounded-2xl shadow-xl p-6 md:p-10">
        {/* Left Section – User Details */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Customer Details</h2>

          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your full name"
          />

          <label className="block mt-3 text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your phone number"
          />

          <label className="block mt-3 text-sm font-medium text-gray-700">Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your delivery address"
          />

          <label className="block mt-3 text-sm font-medium text-gray-700">Pincode</label>
          <input
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter your pincode"
          />

          <div className="mt-4 flex flex-wrap gap-3 items-center">
            <button
              onClick={captureLocation}
              className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium rounded-lg shadow-md hover:opacity-90 transition-all"
            >
              Use Current Location
            </button>
            {coords && (
              <div className="text-sm text-gray-600">
                📍 Lat: {coords.lat.toFixed(5)}, Lng: {coords.lng.toFixed(5)}
              </div>
            )}
          </div>
        </div>

        {/* Right Section – Order Summary */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Order Summary</h2>
          <ul className="mt-3 space-y-2">
            {state.items.map((it) => (
              <li
                key={it.productId + it.variant.weight}
                className="flex items-center justify-between border-b border-gray-200 pb-2"
              >
                <div className="text-gray-700">
                  {it.qty} x {it.name} ({it.variant.weight})
                </div>
                <div className="font-medium text-gray-800">
                  ₹{it.variant.price * it.qty}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-between font-semibold text-lg border-t pt-3">
            <div>Total</div>
            <div>₹{total}</div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition-all"
            >
              <FaWhatsapp size={22} className="text-white" />
              Send Order on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
