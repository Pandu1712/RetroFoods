// src/CartContext.tsx
import React, { createContext, useContext, useReducer } from "react";
import type { ReactNode } from "react";
import type { WeightKey } from "../data/products";

export type CartItem = {
  variant: any;
  id: string; // product id + weight (unique key) OR product id and weight separately
  productId: string;
  name: string;
  weight: WeightKey;
  qty: number;
  unitPrice: number;
  img?: string;
};

type State = {
  items: CartItem[];
};

const initialState: State = { items: [] };

type Action =
  | { type: "ADD"; payload: Omit<CartItem, "id"> } // create id inside reducer
  | { type: "REMOVE"; payload: { id: string } }
  | { type: "UPDATE_QTY"; payload: { id: string; qty: number } }
  | { type: "CLEAR" };

const CartContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD": {
      const { productId, name, weight, unitPrice, qty, img } = action.payload;
      const id = `${productId}__${weight}`;
      const existing = state.items.find((i) => i.id === id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === id ? { ...i, qty: i.qty + qty } : i
          ),
        };
      }
      const newItem: CartItem = {
          id, productId, name, weight, unitPrice, qty, img,
          variant: undefined
      };
      return { ...state, items: [...state.items, newItem] };
    }

    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.id !== action.payload.id) };

    case "UPDATE_QTY":
      return {
        ...state,
        items: state.items.map((i) => (i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i)),
      };

    case "CLEAR":
      return initialState;

    default:
      return state;
  }
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
