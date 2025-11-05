// src/data.ts
export type WeightKey = "250g" | "500g" | "1000g";

export interface Product {
  id: string;
  name: string;
  category: string;
  img: string;
  prices: Record<WeightKey, number>;
  description?: string;
}

// categories (left panel)
export const categories = [
  "All",
  "Mixture",
  "Hot",
  "Sweet",
  /* "Chuppulu", */
  "90'S Snacks",
  "Laddu",
];

// sample product catalog — add more items as required
export const products: Product[] = [
  // Mixture
  {
    id: "mix-001",
    name: "Classic Mixture",
    category: "Mixture",
    img: "https://t4.ftcdn.net/jpg/04/22/75/59/360_F_422755956_LsYfkCmZ0RxDGzYBw3JUmhmOkogQfq8r.jpg",
    prices: { "250g": 80, "500g": 150, "1000g": 280 },
    description: "Spicy crunchy mixture with peanuts and curry leaves.",
  },
  {
    id: "mix-002",
    name: "Spicy Tomato Mixture",
    category: "Mixture",
    img: "https://t4.ftcdn.net/jpg/04/22/75/59/360_F_422755956_LsYfkCmZ0RxDGzYBw3JUmhmOkogQfq8r.jpg",
    prices: { "250g": 90, "500g": 170, "1000g": 320 },
    description: "Tangy tomato-flavored mixture.",
  },
  // Jantikalu
  {
    id: "jan-001",
    name: ".Chuppulu ( చుప్పులు )",
    category: "Hot",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762360752/WhatsApp_Image_2025-11-04_at_20.28.25_a739a877_zpfwzh.jpg",
    prices: { "250g": 70, "500g": 130, "1000g": 250 },
    description: "Traditional jantikalu made in small batches.",
  },
  {
    id: "jan-002",
    name: "Chegodi (చెగోడి )",
    category: "Hot",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762360736/WhatsApp_Image_2025-11-04_at_20.28.27_6f0dd0e5_f8ruoi.jpg",
    prices: { "250g": 75, "500g": 140, "1000g": 270 },
    description: "Masala-coated jantikalu — just the right spice.",
  },
  {
    id: "jan-003",
    name: "Special pappu chegodi ( పప్పు చెగోడి )",
    category: "Hot",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762360733/WhatsApp_Image_2025-11-04_at_20.28.26_f227930c_ojztp5.jpg",
    prices: { "250g": 70, "500g": 130, "1000g": 250 },
    description: "Traditional jantikalu made in small batches.",
  },
  {
    id: "jan-004",
    name: "Small chegodi",
    category: "Hot",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762360746/WhatsApp_Image_2025-11-04_at_20.28.31_eae1d07d_hbyrtw.jpg",
    prices: { "250g": 70, "500g": 130, "1000g": 250 },
    description: "Traditional jantikalu made in small batches.",
  },
  {
    id: "jan-005",
    name: "Sesame chegodi ( నువ్వుల చెగోడి )",
    category: "Hot",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762360749/WhatsApp_Image_2025-11-04_at_20.28.26_eaa72981_rurxyr.jpg",
    prices: { "250g": 70, "500g": 130, "1000g": 250 },
    description: "Traditional jantikalu made in small batches.",
  },
  // Murukku
  {
    id: "mur-001",
    name: "Godhuma gottalu ( గోధుమ గొట్టాలు)",
    category: "Sweet",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762360748/WhatsApp_Image_2025-11-04_at_20.28.29_734c92c2_udg3xf.jpg",
    prices: { "250g": 110, "500g": 200, "1000g": 380 },
    description: "Rich buttery murukku with crisp texture.",
  },  {
    id: "mur-002",
    name: "Paalakayalu ( పాలకాయలు)",
    category: "Sweet",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762360725/WhatsApp_Image_2025-11-04_at_20.28.30_9d571c26_nxm3jn.jpg",
    prices: { "250g": 110, "500g": 200, "1000g": 380 },
    description: "Rich buttery murukku with crisp texture.",
  },  {
    id: "mur-003",
    name: " Gulabi puvvulu ( గులాబీ పువ్వులు)",
    category: "Sweet",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762360750/WhatsApp_Image_2025-11-04_at_20.28.30_e1903a79_zkmsmg.jpg",
    prices: { "250g": 110, "500g": 200, "1000g": 380 },
    description: "Rich buttery murukku with crisp texture.",
  },  {
    id: "mur-004",
    name: " Daarakh ( దారక్షి)",
    category: "Sweet",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762360729/WhatsApp_Image_2025-11-04_at_20.28.29_d4c86812_mylkau.jpg",
    prices: { "250g": 110, "500g": 200, "1000g": 380 },
    description: "Rich buttery murukku with crisp texture.",
  },  {
    id: "mur-005",
    name: "Utankilu ( ఉటాంకీలు/ పిచ్చుక గూళ్లు)",
    category: "Sweet",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762360728/WhatsApp_Image_2025-11-04_at_20.28.28_5fb76fae_x0ubyw.jpg",
    prices: { "250g": 110, "500g": 200, "1000g": 380 },
    description: "Rich buttery murukku with crisp texture.",
  },  {
    id: "mur-006",
    name: "Chandrakanth ( చంద్రకాంతులు )",
    category: "Sweet",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762360740/WhatsApp_Image_2025-11-04_at_22.02.21_6e4be4e0_dkpfk9.jpg",
    prices: { "250g": 110, "500g": 200, "1000g": 380 },
    description: "Rich buttery murukku with crisp texture.",
  },  {
    id: "mur-007",
    name: "Chilaka ( పంచదార చిలకలు )",
    category: "Sweet",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762360716/WhatsApp_Image_2025-11-04_at_22.04.54_b435c6b6_xch7mg.jpg",
    prices: { "250g": 110, "500g": 200, "1000g": 380 },
    description: "Rich buttery murukku with crisp texture.",
  },
  {
    id: "mur-002",
    name: "Rice Murukku",
    category: "Chuppulu",
    img: "https://t4.ftcdn.net/jpg/04/22/75/59/360_F_422755956_LsYfkCmZ0RxDGzYBw3JUmhmOkogQfq8r.jpg",
    prices: { "250g": 95, "500g": 170, "1000g": 320 },
    description: "Light & crispy rice murukku.",
  },
  // Chegodilu
  {
    id: "che-001",
    name: "Coconut Mithayi-(కొబ్బరి చిక్కి )",
    category: "90'S Snacks",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762360747/WhatsApp_Image_2025-11-04_at_22.26.47_cd2f3d75_ede5b0.jpg",
    prices: { "250g": 65, "500g": 120, "1000g": 220 },
    description: "Crunchy chegodilu for tea-time snacking.",
  },
  {
    id: "che-002",
    name: "Halkova-(హల్కోవా)",
    category: "90'S Snacks",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Gel0CYC8yFvTyVJuhMJ1nSTy2C1whJ91rg&s",
    prices: { "250g": 70, "500g": 130, "1000g": 240 },
    description: "Garlic-flavored chegodilu with aroma.",
  },
  // Namkeen
  {
    id: "nam-001",
    name: "Kobbari laddu (కొబ్బరి లడ్డు )",
    category: "Laddu",
    img: "https://res.cloudinary.com/dd4oiwnep/image/upload/v1762360744/WhatsApp_Image_2025-11-04_at_22.09.49_261e6dec_ivomyf.jpg",
    prices: { "250g": 60, "500g": 110, "1000g": 200 },
    description: "Simple salted namkeen for everyday munching.",
  },
  // Laddus
  {
    id: "lad-001",
    name: "Sweet Besan Laddu-(బేసన్ లడ్డూ)",
    category: "Laddu",
    img: "https://prashantcorner.com/cdn/shop/files/BesanLaddooSR-1.jpg?v=1717768060&width=360",
    prices: { "250g": 120, "500g": 220, "1000g": 420 },
    description: "Traditional besan laddus with ghee richness.",
  },
  
  // Add more products as needed...
];
export default products; 