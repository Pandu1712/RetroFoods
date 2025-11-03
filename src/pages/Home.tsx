import { useMemo, useState } from "react";
import Product from '../pages/ProductsPage'
import Cursoal from "../components/Curosal"
import About from "../pages/About"
import Contact from "../pages/Contact"


export default function Home() {

  // 🔍 Search logic

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
