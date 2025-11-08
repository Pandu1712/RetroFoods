import  { useMemo, useState } from "react";
import { useCart } from "../context/CartContext";
import CheckoutModal from "./CheckoutModal";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { state, dispatch } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [sending, setSending] = useState(false);
  const navigate = useNavigate();

  const subtotal = useMemo(
    () => state.items.reduce((sum, i) => sum + i.unitPrice * i.qty, 0),
    [state.items]
  );

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

  const handleCheckoutConfirm = async (payload: {
    name: string;
    phone: string;
    address: string;
    pin: string;
    mapLink?: string;
  }) => {
    setShowCheckout(false);
    setSending(true);

    const lines: string[] = [];
    lines.push("🛍️ *Retro Ruchulu Order*");
    lines.push(`Name: ${payload.name}`);
    lines.push(`Phone: ${payload.phone}`);
    lines.push(`Address: ${payload.address}`);
    lines.push(`Pincode: ${payload.pin}`);
    if (payload.mapLink) lines.push(`Location: ${payload.mapLink}`);
    lines.push("");
    lines.push("*Order Summary:*");

    state.items.forEach((it, idx) => {
      lines.push(
        `${idx + 1}. ${it.name} (${it.weight}) x${it.qty} — ₹${it.unitPrice} each — ₹${
          it.unitPrice * it.qty
        }`
      );
    });

    lines.push("");
    lines.push(`*Subtotal:* ₹${subtotal}`);
    lines.push("Thank you for shopping with Retro Ruchulu!");

    const whatsappNumber = "916303130025"; // ✅ Use your real number here
    const encoded = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${whatsappNumber}?text=${encoded}`;

    window.open(url, "_blank");
    setSending(false);
  };

  if (state.items.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-2xl font-semibold text-amber-700">
          Your cart is empty
        </h2>
        <p className="mt-2 text-gray-600">Add some tasty snacks to continue.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition"
        >
          Go to Shop
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-4 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold text-amber-700 mb-6 text-center">
          Your Cart
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="space-y-5">
            {state.items.map((it) => (
              <div
                key={it.id}
                className="flex flex-col sm:flex-row items-center gap-4 border-b pb-5"
              >
                <img
                  src={it.img}
                  alt={it.name}
                  className="w-full sm:w-32 h-32 object-cover rounded-lg"
                />

                <div className="flex-1 w-full">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-amber-800 text-lg">
                        {it.name}
                      </h3>
                      <p className="text-sm text-gray-600">{it.weight}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-lg">
                        ₹{it.unitPrice * it.qty}
                      </div>
                      <div className="text-sm text-gray-500">
                        ₹{it.unitPrice} each
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <button
                      onClick={() => decrease(it.id)}
                      className="px-3 py-1 rounded border bg-gray-200 hover:bg-gray-300"
                    >
                      -
                    </button>
                    <div className="px-3 py-1 rounded bg-amber-100 font-medium">
                      {it.qty}
                    </div>
                    <button
                      onClick={() => increase(it.id)}
                      className="px-3 py-1 rounded border bg-gray-200 hover:bg-gray-300"
                    >
                      +
                    </button>

                    <button
                      onClick={() =>
                        dispatch({ type: "REMOVE", payload: { id: it.id } })
                      }
                      className="ml-6 text-sm text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <div className="text-sm text-gray-600">Subtotal</div>
              <div className="text-3xl font-bold text-amber-800">
                ₹{subtotal}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <button
                disabled={sending}
                onClick={() => setShowCheckout(true)}
                className={`${
                  sending
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-amber-600 hover:bg-amber-700"
                } text-white px-6 py-3 rounded-full font-semibold shadow transition`}
              >
                {sending ? "Sending..." : "Proceed to WhatsApp"}
              </button>
              <button
                onClick={() => dispatch({ type: "CLEAR" })}
                className="px-6 py-3 rounded-full border font-semibold hover:bg-gray-100 transition"
              >
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
