import { createContext, useContext, useReducer, ReactNode } from "react";

export type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD"; name: string; price: number }
  | { type: "REMOVE"; name: string }
  | { type: "UPDATE_QTY"; name: string; quantity: number }
  | { type: "CLEAR" };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find((i) => i.name === action.name);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.name === action.name ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { name: action.name, price: action.price, quantity: 1 }] };
    }
    case "REMOVE":
      return { items: state.items.filter((i) => i.name !== action.name) };
    case "UPDATE_QTY":
      if (action.quantity <= 0) return { items: state.items.filter((i) => i.name !== action.name) };
      return {
        items: state.items.map((i) =>
          i.name === action.name ? { ...i, quantity: action.quantity } : i
        ),
      };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
};

type CartContextType = {
  items: CartItem[];
  addItem: (name: string, price: number) => void;
  removeItem: (name: string) => void;
  updateQuantity: (name: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem: (name, price) => dispatch({ type: "ADD", name, price }),
        removeItem: (name) => dispatch({ type: "REMOVE", name }),
        updateQuantity: (name, quantity) => dispatch({ type: "UPDATE_QTY", name, quantity }),
        clearCart: () => dispatch({ type: "CLEAR" }),
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
