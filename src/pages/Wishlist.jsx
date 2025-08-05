import React from "react";
import { Link } from "react-router-dom";
import GucciImg from "@/assets/ProductPhoto/Gucci.png";
import CPUCoolerImg from "@/assets/ProductPhoto/RGB liquid CPU Cooler.png";
import GamepadImg from "@/assets/ProductPhoto/GP Shooter USB Gamepad.png";
import JacketImg from "@/assets/ProductPhoto/Quilted Satin Jacket.png";
import LaptopImg from "@/assets/ProductPhoto/ASUS FHD Gaming Laptop.png";
import MonitorImg from "@/assets/ProductPhoto/IPS LCD Gaming Monitor.png";
import HavitGamepadImg from "@/assets/ProductPhoto/HAVIT HV-G92 Gamepad.png";
import KeyboardImg from "@/assets/ProductPhoto/AK-900 Wired Keyboard.png";

const sample = [
  { id: 1, name: "Gucci duffle bag", price: 960, discount: 35, img: GucciImg },
  { id: 2, name: "RGB liquid CPU cooler", price: 1960, img: CPUCoolerImg },
  { id: 3, name: "GP11 Shooter USB Gamepad", price: 550, img: GamepadImg },
  { id: 4, name: "Quilted Satin Jacket", price: 750, img: JacketImg },
];

const justForYouProducts = [
  { id: 5, name: "ASUS FHD Gaming Laptop", price: 960, originalPrice: 1160, discount: 30, img: LaptopImg },
  { id: 6, name: "IPS LCD Gaming Monitor", price: 1160, img: MonitorImg },
  { id: 7, name: "HAVIT HV-G92 Gamepad", price: 560, img: HavitGamepadImg },
  { id: 8, name: "AK-900 Wired Keyboard", price: 200, img: KeyboardImg },
];

const Wishlist = () => {
  return (
    <div className="mb-24 mt-8 space-y-16">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        <Link to="/">Home</Link> <span className="mx-1">/</span> Wishlist
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Wishlist ({sample.length})</h2>
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
        >
          Move All To Bag
        </button>
      </div>

      {/* Wishlist horizontal row */}
      <div className="flex gap-6 overflow-x-auto pb-4">
        {sample.map((p) => (
          <div key={p.id} className="flex-shrink-0 w-64 space-y-2">
            <div className="relative">
              {p.discount && (
                <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  -{p.discount}%
                </div>
              )}
              <Link to={`/product/${p.id}`}>
                <img src={p.img} alt={p.name} className="w-full h-48 rounded-md object-cover" />
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
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      {/* Just For You */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-red-500">Just For You</h3>
          <button 
            type="button"
            className="px-4 py-2 border border-red-500 text-red-500 rounded text-sm hover:bg-red-50 transition-colors"
            style={{
              backgroundColor: 'white',
              color: '#ef4444',
              padding: '8px 16px',
              borderRadius: '6px',
              border: '1px solid #ef4444',
              fontSize: '14px',
              cursor: 'pointer',
              display: 'inline-block',
              textAlign: 'center',
              minWidth: '80px',
              height: '40px',
              lineHeight: '24px'
            }}
          >
            See All
          </button>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {justForYouProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-64 space-y-2">
              {/* Discount Badge */}
              <div className="relative">
                {product.discount && (
                  <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    -{product.discount}%
                  </div>
                )}
                <Link to={`/product/${product.id}`}>
                  <img src={product.img} alt={product.name} className="w-full h-48 rounded-md object-cover" />
                </Link>
              </div>
              <p className="truncate text-sm font-medium">{product.name}</p>
              <div className="flex items-center gap-2">
                <span className="text-red-500 font-semibold text-sm">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through text-xs">${product.originalPrice}</span>
                )}
              </div>
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
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
