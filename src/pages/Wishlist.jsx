import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { dataList } from "@/data/Data";
import { useToast } from "@/context/ToastContext";

const Wishlist = () => {
  const { items, removeItem, clear } = useWishlist();
  const { addItem } = useCart();
  const { showToast } = useToast();

  const wantedTitles = [
    "ASUS FHD Gaming Laptop",
    "HAVIT HV-G92 Gamepad",
    "AK-900 Wired Keyboard",
    "IPS LCD Gaming Monitor",
  ];
  const suggestions = wantedTitles
    .map((title) => dataList.find((d) => d.title === title))
    .filter(Boolean);
  return (
    <div className="mb-24 mt-8 space-y-16">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        <Link to="/">Home</Link> <span className="mx-1">/</span> Wishlist
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Wishlist ({items.length})</h2>
        <button 
          type="button"
          className="rounded-md border px-4 py-2 text-sm hover:bg-gray-100"
          style={{
            backgroundColor: 'white',
            color: '#374151',
            padding: '8px 16px',
            borderRadius: '6px',
            border: '1px solid #d1d5db',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'inline-block',
            textAlign: 'center',
            minWidth: '140px',
            height: '40px',
            lineHeight: '24px'
          }}
          onClick={() => {
            items.forEach((p) => addItem({ id: p.id, name: p.name, price: p.price, img: p.img }, 1));
            clear();
            showToast('Moved all wishlist items to cart', { type: 'success' });
          }}
        >
          Move All To Cart
        </button>
      </div>

      {/* Wishlist horizontal row */}
      <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4">
        {items.map((p) => (
          <div key={p.id} className="group flex-shrink-0 w-48 sm:w-64 space-y-2">
            <div className="relative">
              <button
                onClick={() => removeItem(p.id)}
                className="absolute top-2 right-2 z-10 text-xs text-gray-600 hover:text-black opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Remove
              </button>
              <Link to={`/product/${p.id}`}>
                <img src={p.img} alt={p.name} className="w-full h-32 sm:h-48 rounded-md object-cover" />
              </Link>
            </div>
            <p className="truncate text-sm font-medium">{p.name}</p>
            <span className="text-sm text-red-500 font-semibold">${p.price}</span>
            <button 
              type="button"
              className="mt-2 w-full rounded-md bg-black py-2 text-sm text-white hover:bg-gray-800 transition-colors"
              style={{
                backgroundColor: '#000000',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                fontSize: '14px',
                cursor: 'pointer',
                display: 'block',
                textAlign: 'center',
                width: '100%',
                height: '36px',
                marginTop: '8px'
              }}
              onClick={() => {
                addItem({ id: p.id, name: p.name, price: p.price, img: p.img }, 1);
                showToast('Added to cart', { type: 'success' });
              }}
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      {/* Just For You (dynamic suggestions) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-8 bg-color-button-2 rounded-sm"></span>
            <h3 className="font-inter text-2xl sm:text-3xl ov-800:text-4xl font-semibold text-gray-900">Just For You</h3>
          </div>
        </div>
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4">
          {suggestions.map((it) => (
            <div key={it.id} className="group cursor-pointer w-48 sm:w-64 flex-shrink-0">
              <div className="relative bg-gray-50 rounded-lg p-4 mb-4">
                <img src={it.img} alt={it.title} className="w-full h-32 sm:h-40 object-contain mb-4" />
                <button
                  onClick={() => {
                    addItem({ id: it.id, name: it.title, price: it.priceNow, img: it.img }, 1);
                    showToast('Added to cart', { type: 'success' });
                  }}
                  className="w-full bg-black text-white py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Add To Cart
                </button>
              </div>
              <h4 className="font-medium text-gray-900 mb-2 truncate">{it.title}</h4>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-500 font-medium">${it.priceNow}</span>
                {it.priceOld ? (
                  <span className="text-gray-400 line-through text-sm">${it.priceOld}</span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
