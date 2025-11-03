// src/CartPage.tsx
import React, { useMemo, useState } from "react";
import { useCart } from "../context/CartContext"
import CheckoutModal from "./CheckoutModal";

export default function CartPage() {
  const { state, dispatch } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [sending, setSending] = useState(false);

  const subtotal = useMemo(() => state.items.reduce((s, i) => s + i.unitPrice * i.qty, 0), [state.items]);

  const increase = (id: string) => {
    const item = state.items.find((i) => i.id === id);
    if (!item) return;
    dispatch({ type: "UPDATE_QTY", payload: { id, qty: item.qty + 1 } });
  };
  const decrease = (id: string) => {
    const item = state.items.find((i) => i.id === id);
    if (!item) return;
    const newQty = item.qty - 1;
    if (newQty <= 0) dispatch({ type: "REMOVE", payload: { id } });
    else dispatch({ type: "UPDATE_QTY", payload: { id, qty: newQty } });
  };

  const handleCheckoutConfirm = async (payload: { name: string; phone: string; address: string; pin: string; mapLink?: string }) => {
    setShowCheckout(false);
    setSending(true);

    const lines: string[] = [];
    lines.push("Retro Foods Order 🛍️");
    lines.push(`Name: ${payload.name}`);
    lines.push(`Phone: ${payload.phone}`);
    lines.push(`Address: ${payload.address}`);
    lines.push(`Pincode: ${payload.pin}`);
    if (payload.mapLink) lines.push(`Location: ${payload.mapLink}`);
    lines.push("");
    lines.push("Order Summary:");

    state.items.forEach((it, idx) => {
      lines.push(`${idx + 1}. ${it.name} (${it.weight}) x${it.qty} — ₹${it.unitPrice} each — ₹${it.unitPrice * it.qty}`);
    });

    lines.push("");
    lines.push(`Subtotal: ₹${subtotal}`);
    // optional shipping or tax
    const finalMsg = lines.join("\n");

    // encode for whatsapp (wa.me)
    const whatsappNumber = "916303130025"; // <-- CHANGE to your number, include country code (no +)
    const encoded = encodeURIComponent(finalMsg);
    const url = `https://wa.me/${whatsappNumber}?text=${encoded}`;

    // open new tab
    window.open(url, "_blank");
    setSending(false);
    // optionally clear cart
    // dispatch({type: "CLEAR"});
  };

  if (state.items.length === 0) {
    return (
      <main className="min-h-screen bg-amber-50 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-amber-700">Your cart is empty</h2>
          <p className="mt-2 text-gray-600">Add some tasty snacks to continue.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-amber-50 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-amber-700 mb-6">Your Cart</h1>
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="space-y-4">
            {state.items.map((it) => (
              <div key={it.id} className="flex items-center gap-4 border-b pb-4">
                <img src={it.img} alt={it.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-amber-800">{it.name}</h3>
                      <p className="text-sm text-gray-600">{it.weight}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">₹{it.unitPrice * it.qty}</div>
                      <div className="text-sm text-gray-500">₹{it.unitPrice} each</div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <button onClick={() => decrease(it.id)} className="px-3 py-1 rounded border">-</button>
                    <div className="px-3 py-1 rounded bg-amber-100">{it.qty}</div>
                    <button onClick={() => increase(it.id)} className="px-3 py-1 rounded border">+</button>

                    <button onClick={() => dispatch({ type: "REMOVE", payload: { id: it.id } })} className="ml-6 text-sm text-red-600">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">Subtotal</div>
              <div className="text-2xl font-bold text-amber-800">₹{subtotal}</div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowCheckout(true)}
                className="bg-amber-600 text-white px-5 py-3 rounded-full font-semibold shadow"
              >
                Proceed to WhatsApp
              </button>
              <button onClick={() => dispatch({ type: "CLEAR" })} className="px-4 py-3 rounded-full border">
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <CheckoutModal
        open={showCheckout}
        onClose={() => setShowCheckout(false)}
        onConfirm={handleCheckoutConfirm}
      />
    </main>
  );
}
