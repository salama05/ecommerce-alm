import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="mb-24 mt-8 space-y-16">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500">
        <Link to="/">Account</Link> <span className="mx-1">/</span> My Account
        <span className="mx-1">/</span> Product <span className="mx-1">/</span> View Cart
        <span className="mx-1">/</span> Checkout
      </div>

      <h2 className="text-2xl font-semibold">Billing Details</h2>

      <div className="flex flex-row gap-16 items-start">
        {/* Billing Form */}
        <div className="w-1/2 max-w-lg">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">First Name*</label>
              <input
                type="text"
                className="w-full p-3 bg-gray-200 border-0 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                style={{ backgroundColor: '#e5e7eb', padding: '12px', borderRadius: '6px', border: 'none', fontSize: '14px' }}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Company Name</label>
              <input
                type="text"
                className="w-full p-3 bg-gray-200 border-0 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                style={{ backgroundColor: '#e5e7eb', padding: '12px', borderRadius: '6px', border: 'none', fontSize: '14px' }}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Street Address*</label>
              <input
                type="text"
                className="w-full p-3 bg-gray-200 border-0 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                style={{ backgroundColor: '#e5e7eb', padding: '12px', borderRadius: '6px', border: 'none', fontSize: '14px' }}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Apartment, floor, etc. (optional)</label>
              <input
                type="text"
                className="w-full p-3 bg-gray-200 border-0 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                style={{ backgroundColor: '#e5e7eb', padding: '12px', borderRadius: '6px', border: 'none', fontSize: '14px' }}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Town/City*</label>
              <input
                type="text"
                className="w-full p-3 bg-gray-200 border-0 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                style={{ backgroundColor: '#e5e7eb', padding: '12px', borderRadius: '6px', border: 'none', fontSize: '14px' }}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Phone Number*</label>
              <input
                type="tel"
                className="w-full p-3 bg-gray-200 border-0 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Email Address*</label>
              <input
                type="email"
                className="w-full p-3 bg-gray-200 border-0 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <label className="flex items-center gap-3 text-sm text-gray-700 mt-6">
              <input type="checkbox" className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded" />
              Save this information for faster check-out next time
            </label>
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/2 max-w-md space-y-4 rounded-md border p-4 sm:p-6 shadow-sm">
          {[
            { name: "LCD Monitor", price: 650, img: "/src/assets/ProductPhoto/IPS LCD Gaming Monitor.png" },
            { name: "H3 Gamepad", price: 1100, img: "/src/assets/ProductPhoto/HAVIT HV-G92 Gamepad.png" },
          ].map((item) => (
            <div key={item.name} className="flex items-center justify-between gap-2 sm:gap-4">
              <img src={item.img} alt={item.name} className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded" />
              <span className="flex-1 text-xs sm:text-sm font-medium">{item.name}</span>
              <span className="text-xs sm:text-sm font-semibold text-gray-900">${item.price}</span>
            </div>
          ))}

          <div className="border-t pt-4 text-sm">
            <div className="mb-2 flex justify-between">
              <span>Subtotal:</span>
              <span>$1750</span>
            </div>
            <div className="mb-2 flex justify-between">
              <span>Shipping:</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>$1750</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="space-y-2 pt-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" defaultChecked /> Bank
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" /> Cash on delivery
            </label>
          </div>

          {/* Coupon */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Coupon Code"
              className="flex-1 rounded-md border p-2 text-sm outline-none focus:border-red-500"
            />
            <button 
              type="button"
              className="rounded-md bg-red-500 px-4 text-white hover:bg-red-600"
              style={{
                backgroundColor: '#ef4444',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                fontSize: '14px',
                cursor: 'pointer',
                display: 'inline-block',
                textAlign: 'center',
                minWidth: '120px',
                height: '40px'
              }}
            >
              Apply Coupon
            </button>
          </div>

          <button 
            type="button"
            className="w-full rounded-md bg-red-500 py-3 text-sm font-medium text-white hover:bg-red-600"
            style={{
              backgroundColor: '#ef4444',
              color: 'white',
              padding: '12px 16px',
              borderRadius: '6px',
              border: 'none',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'block',
              textAlign: 'center',
              width: '100%',
              height: '48px'
            }}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
