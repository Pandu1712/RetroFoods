import React, { useState, useEffect } from "react";

const slides = [
  {
    img: "https://i.ytimg.com/vi/4WRieNi2bSo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCcgoIxaS-CjmOkboXJ2bFvZmCZMA",
    name: "Mixture",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0jVr4kzDFiqpH5Eog2ymXWH99Vzgfrj47TA&s",
    name: "Jantikalu",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo7DzfZJu7UynX29_vAIOERggUVtolcrfH6A&s",
    name: "Karasev",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH26FrwOuR8_cDKr8hHe0SrIHThZd2Y3KQaA&s",
    name: "Chegodilu",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQyAei2jtfxLsXZdnFlOTtkOZSoHedggl0CA&s",
    name: "Butter Chakli",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-3xl shadow-lg bg-white mt-6">
      {/* Slides Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative h-[280px] sm:h-[400px] md:h-[520px] group"
          >
            <img
              src={slide.img}
              alt={slide.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

            {/* Left Side Text */}
            <div className="absolute left-8 bottom-10 sm:left-12 sm:bottom-16 text-left">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-lg">
                {slide.name}
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-orange-600 mt-3 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 sm:left-5 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-orange-600 p-2 sm:p-3 rounded-full shadow-md backdrop-blur-sm transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 sm:right-5 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-orange-600 p-2 sm:p-3 rounded-full shadow-md backdrop-blur-sm transition"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
              current === i
                ? "bg-orange-500 scale-110 shadow-md"
                : "bg-white/60 hover:bg-orange-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
