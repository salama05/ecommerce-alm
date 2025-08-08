import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import ColorBtn from "./ColorBtn";
import { TiStarFullOutline } from "react-icons/ti";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useToast } from "@/context/ToastContext";
function ProductCard({ item, sectionTitle }) {
  const { addItem } = useCart();
  const { addItem: addWishlistItem, removeItem: removeWishlistItem, isInWishlist } = useWishlist();
  const { showToast } = useToast();
  return (
    <div className="group border-slate-950 relative mx-auto w-full max-w-[270px] rounded-lg border shadow-lg overflow-hidden">
      <div className="flex h-[250px] items-center justify-center bg-[#F5F5F5] relative">
        {/* Discount Badge */}
        {item.saleShow && (
          <div className="absolute left-3 top-3 h-[26px] w-[55px] rounded bg-color-button-2 px-2 py-1 text-center font-poppins text-font-sm-400 text-white">
            {item.salePrecentage}%
          </div>
        )}

        {/* New Badge */}
        {item.newShow && (
          <div className="absolute left-3 top-3 h-[26px] w-[51px] rounded bg-color-button-1 px-2 py-1 text-center font-poppins text-font-sm-400 text-white">
            New
          </div>
        )}

        {/* Image */}
        <img
          src={item.img}
          alt="HAVIT HV-G92 Gamepad"
          className="h-[180px] w-[190px] object-cover"
        />

        {/* Wishlist and View Icons */}
        <div className="absolute right-3 top-3 flex flex-col justify-center gap-2">
          <button
            aria-label="Toggle wishlist"
            onClick={() =>
              isInWishlist(item.id)
                ? (removeWishlistItem(item.id), showToast('Removed from wishlist', { type: 'warning' }))
                : (addWishlistItem({ id: item.id, title: item.title, price: item.priceNow, img: item.img }), showToast('Added to wishlist', { type: 'success' }))
            }
            className={`flex h-[34px] w-[34px] items-center justify-center ${
              isInWishlist(item.id) ? 'text-red-500' : ''
            }`}
          >
            <FaRegHeart />
          </button>
          <button className="flex h-[34px] w-[34px] items-center justify-center">
            <FiEye />
          </button>
        </div>

        {/* Add to Cart appears on hover */}
        <div className="absolute inset-x-0 bottom-0 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
          <div className="p-3">
            <button
              type="button"
              onClick={() => {
                addItem({ id: item.id, title: item.title, price: item.priceNow, img: item.img }, 1);
                showToast('Added to cart', { type: 'success' });
              }}
              className="w-full rounded bg-color-button-2 text-white py-2 transition-colors hover:bg-black"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 h-[85px] font-poppins text-font-lg-500">
        {/* Title */}
        <h3 className="">{item.title}</h3>

        {/* Price */}
        <div
          className={`text-base mt-1 flex items-center gap-3 ${
            !item.priceOldShow ? "absolute" : ""
          }`}
        >
          <span className="text-color-button-2">${item.priceNow}</span>
          {item.priceOld !== 0 && (
            <span className="text-color-text-2 line-through">
              ${item.priceOld}
            </span>
          )}
        </div>

        <div className="mt-2 flex h-5 items-center text-font-md-600 text-color-text-2">
          <div
            className={`relative flex items-center ${
              !item.priceOldShow ? "left-12 top-[-3px]" : ""
            }`}
          >
            {/* Star Gray*/}
            <div className="flex space-x-1">
              {Array(5) // وضع 5 نجوم رمادية
                .fill(0)
                .map((_, i) => (
                  <span key={`gray-${i}`} className="text-color-star-gray">
                    <TiStarFullOutline />
                  </span>
                ))}
            </div>
            {/* Star Yellow*/}
            <div className="absolute flex space-x-1 rounded-[1.4rem]">
              {Array(item.ratingStars)
                .fill(0)
                .map((_, i) => (
                  <span key={`yellow-${i}`} className="text-color-star-yellow">
                    <TiStarFullOutline />
                  </span>
                ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">
              ({item.ratingNumber})
            </span>
          </div>
        </div>
      </div>
      
      {item.colorShow && (
        <div className="mt-2">
          <ColorBtn />
        </div>
      )}
    </div>
  );
}

export default ProductCard;
