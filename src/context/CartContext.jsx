import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "cartItems";

export function CartProvider({ children }) {
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

  const addItem = (product, qty = 1) => {
    setItems((prev) => {
      const index = prev.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        const updated = [...prev];
        updated[index] = { ...updated[index], qty: updated[index].qty + qty };
        return updated;
      }
      const cartItem = {
        id: product.id,
        name: product.name || product.title || "Product",
        price: Number(product.price ?? product.priceNow ?? 0),
        img: product.img || "",
        qty: qty,
      };
      return [...prev, cartItem];
    });
  };

  const updateQty = (id, qty) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, qty: Number(qty) } : it)));
  };

  const removeItem = (id) => setItems((prev) => prev.filter((it) => it.id !== id));
  const clear = () => setItems([]);

  const { subtotal, total, count } = useMemo(() => {
    const subtotalValue = items.reduce((acc, it) => acc + it.price * it.qty, 0);
    const shipping = 0;
    return {
      subtotal: subtotalValue,
      total: subtotalValue + shipping,
      count: items.reduce((acc, it) => acc + it.qty, 0),
    };
  }, [items]);

  const value = {
    items,
    addItem,
    updateQty,
    removeItem,
    clear,
    subtotal,
    total,
    count,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}


