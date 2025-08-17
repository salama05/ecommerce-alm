import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { items, updateQty, removeItem, subtotal, total } = useCart();
  const [coupon, setCoupon] = useState("");
  const shipping = 0;

  return (
    <div className="my-12 space-y-10">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        <Link to="/">Home</Link> <span className="mx-1">/</span> Cart
      </div>

      {/* Cart Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] text-left">
          <thead>
            <tr className="border-b text-sm font-semibold">
              <th className="p-4 w-2/5">Product</th>
              <th className="p-4 w-1/5 text-center">Price</th>
              <th className="p-4 w-1/5 text-center">Quantity</th>
              <th className="p-4 w-1/5 text-center">Subtotal</th>
              <th className="p-4 w-16"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((it) => (
              <tr key={it.id} className="border-b text-sm">
                <td className="p-2 sm:p-4 flex items-center gap-2 sm:gap-4">
                  <img src={it.img} alt={it.name} className="h-12 w-12 sm:h-16 sm:w-16 object-cover rounded" />
                  <span className="text-xs sm:text-sm">{it.name}</span>
                </td>
                <td className="p-2 sm:p-4 text-center text-xs sm:text-sm">${it.price}</td>
                <td className="p-2 sm:p-4 text-center">
                  <select
                    className="rounded-md border px-2 sm:px-3 py-1 sm:py-2 mx-auto text-xs sm:text-sm"
                    value={it.qty}
                    onChange={(e) => updateQty(it.id, e.target.value)}
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-2 sm:p-4 text-center text-xs sm:text-sm">${it.price * it.qty}</td>
                <td className="p-2 sm:p-4 text-center">
                  <button
                    onClick={() => removeItem(it.id)}
                    className="text-red-500 hover:text-red-700 text-lg"
                  >
                    <IoTrashOutline />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Actions */}
      <div className="space-y-6">
        {/* Top row - Buttons */}
        <div className="flex justify-between">
          <Link
            to="/"
            className="rounded-md border border-gray-300 px-6 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 h-10 flex items-center justify-center min-w-[140px] bg-white"
            style={{
              backgroundColor: 'white',
              color: '#374151',
              padding: '8px 24px',
              borderRadius: '6px',
              border: '1px solid #d1d5db',
              minWidth: '140px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            Return To Shop
          </Link>
          <button 
            type="button"
            className="rounded-md border border-gray-300 px-6 py-2 text-sm hover:bg-gray-100 transition-colors duration-200 h-10 flex items-center justify-center min-w-[120px] bg-white"
            style={{
              backgroundColor: 'white',
              color: '#374151',
              padding: '8px 24px',
              borderRadius: '6px',
              border: '1px solid #d1d5db',
              minWidth: '120px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            Update Cart
          </button>
        </div>

        {/* Bottom row - Coupon left, Cart Total right */}
        <div className="flex justify-between items-start">
          {/* Coupon - Left side */}
          <div className="flex gap-2 w-full max-w-md">
            <input
              type="text"
              placeholder="Coupon Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="flex-1 rounded-md border px-4 py-2 text-sm"
            />
            <button 
              type="button"
              className="rounded-md bg-red-500 px-4 py-2 text-sm text-white hover:bg-red-600 transition-colors duration-200 min-w-[120px] h-10 flex items-center justify-center"
              style={{
                backgroundColor: '#ef4444',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                minWidth: '120px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              Apply Coupon
            </button>
          </div>

          {/* Cart Total - Right side */}
          <div className="w-full max-w-md">
            <div className="rounded-md border p-6 text-sm">
              <h4 className="mb-4 text-base font-semibold">Cart Total</h4>
              <div className="mb-2 flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
              </div>
              <div className="mb-2 flex justify-between">
                <span>Shipping:</span>
                <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
              </div>
              <div className="mb-4 flex justify-between font-medium">
                <span>Total:</span>
                <span>${total}</span>
              </div>
              <button 
                type="button"
                className="w-full rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600 transition-colors duration-200 h-12 flex items-center justify-center font-medium"
                style={{
                  backgroundColor: '#ef4444',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  border: 'none',
                  width: '100%',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
