import React, { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext(null);
const STORAGE_KEY = "wishlistItems";

export function WishlistProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (product) => {
    setItems((prev) => {
      if (prev.some((p) => p.id === product.id)) return prev;
      const item = {
        id: product.id,
        name: product.name || product.title || "Product",
        price: Number(product.price ?? product.priceNow ?? 0),
        img: product.img || "",
      };
      return [...prev, item];
    });
  };

  const removeItem = (id) => setItems((prev) => prev.filter((it) => it.id !== id));

  const clear = () => setItems([]);

  const isInWishlist = (id) => items.some((it) => it.id === id);

  return (
    <WishlistContext.Provider value={{ items, addItem, removeItem, clear, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}


