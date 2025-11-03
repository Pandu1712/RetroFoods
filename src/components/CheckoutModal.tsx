// src/CheckoutModal.tsx
import React, { useState } from "react";

export default function CheckoutModal({
  open,
  onClose,
  onConfirm,
  initialPhone = "",
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: (payload: {
    name: string;
    phone: string;
    address: string;
    pin: string;
    mapLink?: string;
  }) => void;
  initialPhone?: string;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(initialPhone);
  const [address, setAddress] = useState("");
  const [pin, setPin] = useState("");
  const [loadingLocation, setLoadingLocation] = useState(false);

  if (!open) return null;

  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    setLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const google = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
        setAddress((a) => (a ? a + ` (Location attached)` : `Location: ${lat},${lon}`));
        setLoadingLocation(false);
        // store map link in address string or handle separately
        // we'll send mapLink in onConfirm param if needed
        (onConfirm as any).__mapLink = google;
      },
      (err) => {
        console.error(err);
        setLoadingLocation(false);
        alert("Unable to fetch location: " + err.message);
      }
    );
  };

  const handleConfirm = () => {
    if (!name.trim() || !phone.trim() || !address.trim() || !pin.trim()) {
      alert("Please fill all fields before proceeding.");
      return;
    }
    const mapLink = (onConfirm as any).__mapLink;
    onConfirm({ name, phone, address, pin, mapLink });
    // reset fields (optional)
    setName("");
    setPhone("");
    setAddress("");
    setPin("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        <h3 className="text-xl font-semibold text-amber-700 mb-3">Confirm your details</h3>
        <div className="space-y-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="w-full px-3 py-2 border rounded"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Mobile number (e.g. 91XXXXXXXXXX)"
            className="w-full px-3 py-2 border rounded"
          />
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Full address"
            rows={3}
            className="w-full px-3 py-2 border rounded resize-none"
          />
          <input value={pin} onChange={(e) => setPin(e.target.value)} placeholder="Pincode" className="w-full px-3 py-2 border rounded" />
          <div className="flex items-center justify-between gap-2 mt-2">
            <button
              onClick={useCurrentLocation}
              className="flex-1 bg-amber-100 text-amber-700 px-3 py-2 rounded hover:bg-amber-200"
            >
              {loadingLocation ? "Getting location..." : "Use current location"}
            </button>
            <button onClick={onClose} className="px-3 py-2 rounded border">
              Cancel
            </button>
            <button onClick={handleConfirm} className="px-3 py-2 rounded bg-amber-600 text-white">
              Confirm & Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
