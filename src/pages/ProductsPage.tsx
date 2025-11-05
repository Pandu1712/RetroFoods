    // src/ProductsPage.tsx
    import { useMemo, useState } from "react";
    import { products as catalog, categories } from "../data/products";
    import { useCart } from "../context/CartContext";
    import type { WeightKey } from "../data/products";
    import { Link } from "react-router-dom";

    const weightOptions: WeightKey[] = ["250g", "500g", "1000g"];

    export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const [q, setQ] = useState("");
    const [minPrice, setMinPrice] = useState<number | "">("");
    const [maxPrice, setMaxPrice] = useState<number | "">("");
    const { dispatch } = useCart();

    const [weightMap, setWeightMap] = useState<Record<string, WeightKey>>({});
    const [showCategories, setShowCategories] = useState(false); // 👈 toggle for mobile

    const filtered = useMemo(() => {
        return catalog.filter((p) => {
        if (activeCategory !== "All" && p.category !== activeCategory) return false;
        if (q.trim() && !p.name.toLowerCase().includes(q.toLowerCase())) return false;
        if (minPrice !== "" || maxPrice !== "") {
            const min = minPrice === "" ? 0 : Number(minPrice);
            const max = maxPrice === "" ? Infinity : Number(maxPrice);
            const any = Object.values(p.prices).some((price) => price >= min && price <= max);
            if (!any) return false;
        }
        return true;
        });
    }, [activeCategory, q, minPrice, maxPrice]);

    const handleAdd = (productId: string) => {
        const product = catalog.find((p) => p.id === productId);
        if (!product) return;
        const weight = weightMap[productId] || "250g";
        const unitPrice = product.prices[weight];
        dispatch({
        type: "ADD",
        payload: {
            productId,
            name: product.name,
            weight,
            qty: 1,
            unitPrice,
            img: product.img,
            variant: undefined,
        },
        });
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100 py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            {/* Mobile Toggle Button */}
            <div className="md:hidden flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-amber-800">Snacks</h2>
            <button
                onClick={() => setShowCategories(!showCategories)}
                className="bg-amber-600 text-white px-4 py-2 rounded-full font-medium"
            >
                {showCategories ? "Hide Categories" : "Choose Categories"}
            </button>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
            {/* Categories Sidebar */}
            <aside
                className={`md:col-span-1 bg-white rounded-xl shadow p-4 h-fit md:sticky md:top-24 transition-all duration-300 ${
                showCategories ? "block" : "hidden md:block"
                }`}
            >
                <h3 className="font-semibold text-lg text-amber-700 mb-3">
                Categories
                </h3>
                <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                    <button
                    key={cat}
                    onClick={() => {
                        setActiveCategory(cat);
                        setShowCategories(false); // 👈 close menu after selection on mobile
                    }}
                    className={`text-left px-3 py-2 rounded-md transition ${
                        activeCategory === cat
                        ? "bg-amber-500 text-white font-semibold"
                        : "hover:bg-amber-50 text-amber-800"
                    }`}
                    >
                    {cat}
                    </button>
                ))}
                </div>

                {/* Filters */}
                <div className="mt-6">
                <h4 className="font-medium text-sm text-amber-700 mb-2">
                    Filter by price
                </h4>
                <div className="flex gap-2">
                    <input
                    type="number"
                    placeholder="Min"
                    value={minPrice as any}
                    onChange={(e) =>
                        setMinPrice(e.target.value === "" ? "" : Number(e.target.value))
                    }
                    className="w-1/2 px-3 py-2 border rounded"
                    />
                    <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice as any}
                    onChange={(e) =>
                        setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))
                    }
                    className="w-1/2 px-3 py-2 border rounded"
                    />
                </div>
                <button
                    onClick={() => {
                    setMinPrice("");
                    setMaxPrice("");
                    }}
                    className="mt-3 text-sm text-amber-700 hover:underline"
                >
                    Reset
                </button>
                </div>

                <Link
                to="/cart"
                className="mt-6 block text-center bg-amber-600 text-white rounded-full py-2 font-semibold"
                >
                View Cart
                </Link>
            </aside>

            {/* Products Section */}
            <section className="md:col-span-4">
                <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
                <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Search snacks, e.g. mixture, jantikalu..."
                    className="flex-1 w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-amber-300"
                />

                <select
                    className="w-full sm:w-40 px-3 py-3 rounded-xl border"
                    onChange={(e) => setActiveCategory(e.target.value)}
                    value={activeCategory}
                >
                    {categories.map((c) => (
                    <option key={c} value={c}>
                        {c}
                    </option>
                    ))}
                </select>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((p) => (
                    <div
                    key={p.id}
                    className="bg-white rounded-2xl shadow p-4 flex flex-col"
                    >
                    <img
  src={p.img}
  alt={p.name}
  className="w-full h-64 object-cover rounded-none mb-3"
/>

                    <div className="flex-1">
                        <h3 className="font-semibold text-lg text-amber-800">
                        {p.name}
                        </h3>
                        

                        {/* Weight Selector */}
                        <div className="flex flex-wrap gap-2  mt-5">
                        {weightOptions.map((w) => (
                            <button
                            key={w}
                            onClick={() =>
                                setWeightMap((s) => ({ ...s, [p.id]: w }))
                            }
                            className={`px-3 py-1 rounded-full text-sm border ${
                                (weightMap[p.id] || "250g") === w
                                ? "bg-amber-600 text-white border-amber-600"
                                : "text-amber-700 border-transparent hover:border-amber-300"
                            }`}
                            >
                            {w} — ₹{p.prices[w]}
                            </button>
                        ))}
                        </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                        <div className="font-semibold text-amber-700">
                        ₹{p.prices[weightMap[p.id] || "250g"]}
                        </div>
                        <button
                        onClick={() => handleAdd(p.id)}
                        className="bg-amber-600 text-white px-4 py-2 rounded-full font-medium hover:scale-[1.02] transition"
                        >
                        Add to cart
                        </button>
                    </div>
                    </div>
                ))}

                {filtered.length === 0 && (
                    <div className="col-span-full text-center text-gray-600 py-20">
                    No products found.
                    </div>
                )}
                </div>
            </section>
            </div>
        </div>
        </main>
    );
    }
