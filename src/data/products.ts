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
  "Jantikalu",
  "Murukku",
  "Chegodilu",
  "Namkeen",
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
    name: "Crispy Jantikalu",
    category: "Jantikalu",
    img: "https://t4.ftcdn.net/jpg/04/22/75/59/360_F_422755956_LsYfkCmZ0RxDGzYBw3JUmhmOkogQfq8r.jpg",
    prices: { "250g": 70, "500g": 130, "1000g": 250 },
    description: "Traditional jantikalu made in small batches.",
  },
  {
    id: "jan-002",
    name: "Masala Jantikalu",
    category: "Jantikalu",
    img: "https://t4.ftcdn.net/jpg/04/22/75/59/360_F_422755956_LsYfkCmZ0RxDGzYBw3JUmhmOkogQfq8r.jpg",
    prices: { "250g": 75, "500g": 140, "1000g": 270 },
    description: "Masala-coated jantikalu — just the right spice.",
  },
  // Murukku
  {
    id: "mur-001",
    name: "Butter Murukku",
    category: "Murukku",
    img: "https://t4.ftcdn.net/jpg/04/22/75/59/360_F_422755956_LsYfkCmZ0RxDGzYBw3JUmhmOkogQfq8r.jpg",
    prices: { "250g": 110, "500g": 200, "1000g": 380 },
    description: "Rich buttery murukku with crisp texture.",
  },
  {
    id: "mur-002",
    name: "Rice Murukku",
    category: "Murukku",
    img: "https://t4.ftcdn.net/jpg/04/22/75/59/360_F_422755956_LsYfkCmZ0RxDGzYBw3JUmhmOkogQfq8r.jpg",
    prices: { "250g": 95, "500g": 170, "1000g": 320 },
    description: "Light & crispy rice murukku.",
  },
  // Chegodilu
  {
    id: "che-001",
    name: "Classic Chegodilu",
    category: "Chegodilu",
    img: "https://t4.ftcdn.net/jpg/04/22/75/59/360_F_422755956_LsYfkCmZ0RxDGzYBw3JUmhmOkogQfq8r.jpg",
    prices: { "250g": 65, "500g": 120, "1000g": 220 },
    description: "Crunchy chegodilu for tea-time snacking.",
  },
  {
    id: "che-002",
    name: "Garlic Chegodilu",
    category: "Chegodilu",
    img: "https://t4.ftcdn.net/jpg/04/22/75/59/360_F_422755956_LsYfkCmZ0RxDGzYBw3JUmhmOkogQfq8r.jpg",
    prices: { "250g": 70, "500g": 130, "1000g": 240 },
    description: "Garlic-flavored chegodilu with aroma.",
  },
  // Namkeen
  {
    id: "nam-001",
    name: "Salted Namkeen",
    category: "Namkeen",
    img: "https://t4.ftcdn.net/jpg/04/22/75/59/360_F_422755956_LsYfkCmZ0RxDGzYBw3JUmhmOkogQfq8r.jpg",
    prices: { "250g": 60, "500g": 110, "1000g": 200 },
    description: "Simple salted namkeen for everyday munching.",
  },
  // Laddus
  {
    id: "lad-001",
    name: "Sweet Besan Laddu",
    category: "Laddu",
    img: "https://t4.ftcdn.net/jpg/04/22/75/59/360_F_422755956_LsYfkCmZ0RxDGzYBw3JUmhmOkogQfq8r.jpg",
    prices: { "250g": 120, "500g": 220, "1000g": 420 },
    description: "Traditional besan laddus with ghee richness.",
  },
  // Add more products as needed...
];
export default products; 