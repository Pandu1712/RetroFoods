export interface ProductVariant {
  weight: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  variants: ProductVariant[];
}
