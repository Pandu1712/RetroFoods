import React, { useMemo, useState } from "react";
import productsData from "../data/products";
import Product from '../pages/ProductsPage'
import Cursoal from "../components/Curosal"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Footer from "../components/Footer";

export default function Home() {
  const [q, setQ] = useState("");

  // 🔍 Search logic
  const products = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return productsData;
    return productsData.filter(
      (p) =>
        p.name.toLowerCase().includes(t) ||
        p.category.toLowerCase().includes(t)
    );
  }, [q]);

  return (
    <>
      {/* 🧁 Carousel */}
      <Cursoal />
      <Product/>
      <About />
        <Contact />
     
    </>
  );
}
