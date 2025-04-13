import { createContext, useContext, useEffect, useState } from "react";
import { CartItem } from "../types/cartItem";

type CartContextType = {
  items: CartItem[];
  cartCount: number;
  totalPrice: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, color: string, storage: string) => void;
  updateQuantity: (
    id: string,
    color: string,
    storage: string,
    newQuantity: number
  ) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_KEY = "zara-cart";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Load from localStorage on first load
  useEffect(() => {
    const stored = localStorage.getItem(CART_KEY);
    if (stored) {
      setItems(JSON.parse(stored));
    }
    setHasLoaded(true);
  }, []);

  // Sync to localStorage on any change
  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    }
  }, [items, hasLoaded]);

  const addToCart = (newItem: CartItem) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === newItem.id &&
          item.color === newItem.color &&
          item.storage === newItem.storage
      );
      if (existing) {
        return prev.map((item) =>
          item === existing
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      } else {
        return [...prev, newItem];
      }
    });
  };

  const removeFromCart = (id: string, color: string, storage: string) => {
    setItems((prev) =>
      prev.filter(
        (item) =>
          !(item.id === id && item.color === color && item.storage === storage)
      )
    );
  };

  const updateQuantity = (
    id: string,
    color: string,
    storage: string,
    newQuantity: number
  ) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id && item.color === color && item.storage === storage
            ? { ...item, quantity: Math.max(1, newQuantity) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setItems([]);

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        cartCount,
        totalPrice,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};
