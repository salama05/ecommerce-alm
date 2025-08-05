import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

// In real app this would fetch by ID
const dummy = {
  id: 1,
  name: "Havic HV G-92 Gamepad",
  price: 192,
  originalPrice: 400,
  reviews: 150,
  rating: 4,
  inStock: true,
  description:
    "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  images: [
    "/src/assets/ProductPhoto/HAVIT HV-G92 Gamepad.png",
    "/src/assets/ProductPhoto/HAVIT HV-G92 Gamepad.png",
    "/src/assets/ProductPhoto/HAVIT HV-G92 Gamepad.png",
    "/src/assets/ProductPhoto/HAVIT HV-G92 Gamepad.png",
  ],
  colors: [
    { name: "Red", value: "#ef4444" },
    { name: "Blue", value: "#3b82f6" },
  ],
  sizes: ["XS", "S", "M", "L", "XL"]
};

const relatedProducts = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 4.5,
    reviews: 88,
    image: "/src/assets/ProductPhoto/HAVIT HV-G92 Gamepad.png",
    discount: "-40%"
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    rating: 4,
    reviews: 75,
    image: "/src/assets/ProductPhoto/IPS LCD Gaming Monitor.png",
    discount: "-35%"
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    rating: 5,
    reviews: 99,
    image: "/src/assets/ProductPhoto/IPS LCD Gaming Monitor.png",
    discount: "-30%"
  },
  {
    id: 4,
    name: "RGB Liquid CPU Cooler",
    price: 160,
    originalPrice: 170,
    rating: 4.5,
    reviews: 65,
    image: "/src/assets/ProductPhoto/HAVIT HV-G92 Gamepad.png",
    discount: "-25%"
  }
];

const Product = () => {
  const { id } = useParams();
  const product = dummy; // ignore id for demo
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(2); // M size
  const [quantity, setQuantity] = useState(1);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-8 text-sm text-gray-500">
        <Link to="/" className="hover:text-gray-700">Account</Link> 
        <span className="mx-2">/</span> 
        <Link to="/" className="hover:text-gray-700">Gaming</Link>
        <span className="mx-2">/</span> 
        <span className="text-gray-900">{product.name}</span>
      </div>

      <div className="flex flex-row gap-16 items-start">
        {/* Gallery */}
        <div className="w-1/2 flex gap-6">
          {/* Thumbnail Images */}
          <div className="flex flex-col gap-4">
            {product.images.map((src, i) => (
              <img 
                key={i} 
                src={src} 
                alt={`thumb ${i + 1}`} 
                className={`w-20 h-20 rounded-md cursor-pointer border-2 object-cover ${
                  selectedImage === i ? 'border-red-500' : 'border-gray-200'
                }`}
                onClick={() => setSelectedImage(i)}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-1">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name} 
              className="w-full h-[500px] rounded-md object-cover bg-gray-50" 
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-1/2 space-y-6">
          <h1 className="text-3xl font-semibold text-gray-900">{product.name}</h1>
          
          {/* Rating and Reviews */}
          <div className="flex items-center gap-2">
            <div className="flex">{renderStars(product.rating)}</div>
            <span className="text-sm text-gray-500">({product.reviews} Reviews)</span>
            <span className="text-sm text-gray-400">|</span>
            <span className="text-sm text-green-500">{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
          </div>

          {/* Price */}
          <div className="text-2xl font-medium text-gray-900">${product.price}.00</div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <hr className="border-gray-200" />

          {/* Colors */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-lg font-medium">Colours:</span>
              <div className="flex gap-2">
                {product.colors.map((color, i) => (
                  <button
                    key={i}
                    className={`w-6 h-6 rounded-full border-2 ${
                      selectedColor === i ? 'border-gray-800' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: color.value }}
                    onClick={() => setSelectedColor(i)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-lg font-medium">Size:</span>
              <div className="flex gap-2">
                {product.sizes.map((size, i) => (
                  <button
                    key={i}
                    className={`px-3 py-1 border rounded text-sm ${
                      selectedSize === i 
                        ? 'border-red-500 bg-red-500 text-white' 
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                    onClick={() => setSelectedSize(i)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quantity and Buttons */}
          <div className="flex items-center gap-4 pt-4">
            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-300 rounded">
              <button 
                className="px-3 py-2 hover:bg-gray-100"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">
                {quantity}
              </span>
              <button 
                className="px-3 py-2 hover:bg-gray-100"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            {/* Buy Now Button */}
            <button 
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-2 rounded transition-colors"
              style={{
                backgroundColor: '#ef4444',
                color: 'white',
                padding: '12px 32px',
                borderRadius: '6px',
                border: 'none',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              Buy Now
            </button>

            {/* Wishlist Button */}
            <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          {/* Delivery Info */}
          <div className="border border-gray-200 rounded-lg p-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Free Delivery</p>
                <p className="text-sm text-gray-500">Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <hr className="border-gray-200" />
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Return Delivery</p>
                <p className="text-sm text-gray-500">Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <div className="mt-16 space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-5 h-10 bg-red-500 rounded"></div>
          <h2 className="text-2xl font-semibold text-gray-900">Related Item</h2>
        </div>
        
        <div className="grid grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative bg-gray-50 rounded-lg p-4 mb-4">
                {item.discount && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-xs rounded">
                    {item.discount}
                  </span>
                )}
                <button className="absolute top-3 right-3 p-1 hover:bg-white rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-4" />
                <button className="w-full bg-black text-white py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Add To Cart
                </button>
              </div>
              <h3 className="font-medium text-gray-900 mb-2">{item.name}</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-500 font-medium">${item.price}</span>
                {item.originalPrice && (
                  <span className="text-gray-400 line-through text-sm">${item.originalPrice}</span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <div className="flex">{renderStars(Math.floor(item.rating))}</div>
                <span className="text-sm text-gray-500">({item.reviews})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
