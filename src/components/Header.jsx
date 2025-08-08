import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoMenu, IoClose } from "react-icons/io5";
import { useCart } from "@/context/CartContext";
import { VscAccount } from "react-icons/vsc";
import { useWishlist } from "@/context/WishlistContext";

const Header = () => {
  const { count } = useCart();
  const { items: wishlistItems } = useWishlist();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <header className="relative mx-auto mt-6 flex h-[38px] max-w-[1170px] items-center justify-between px-4">
      {/* Logo */}
      <div className="font-inter text-font-4xl-700">Exclusive</div>

      {/* Navigation Links */}
      <nav className="hidden ov-800:flex space-x-12 text-font-lg-400">
        {[
          { name: "Home", to: "/" },
          { name: "Contact", to: "/contact" },
          { name: "About", to: "/about" },
          { name: "Sign Up", to: "/signup" },
        ].map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            className={({ isActive }) =>
              `transform transition-transform duration-200 hover:scale-110 hover:underline hover:decoration-color-text-2 ${
                isActive ? "text-red-500" : ""
              }`
            }
            onClick={() => setIsMobileNavOpen(false)}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Search and Icons */}
      <div className="flex items-center justify-between gap-4">
        <div className="relative mr-2 ov-800:mr-6 shadow-lg">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="h-[38px] w-[160px] ov-800:w-[243px] rounded-md bg-color-second-2 pl-5 pr-8 font-poppins text-font-sm-400"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 transform">
            <IoSearchOutline />
          </button>
        </div>

        <Link to="/wishlist" className="relative flex h-8 w-8 items-center justify-center">
          <FaRegHeart />
          {wishlistItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-color-button-2 text-white text-[10px] leading-none rounded-full px-1.5 py-1">
              {wishlistItems.length}
            </span>
          )}
        </Link>

        <Link to="/cart" className="relative flex h-8 w-8 items-center justify-center">
          <IoCartOutline className="h-5 w-5" />
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-color-button-2 text-white text-[10px] leading-none rounded-full px-1.5 py-1">
              {count}
            </span>
          )}
        </Link>

        <Link to="/account" className="flex h-8 w-8 items-center justify-center">
          <VscAccount className="h-5 w-5" />
        </Link>

        {/* Mobile menu toggle */}
        <button
          aria-label="Toggle menu"
          className="ov-800:hidden flex h-8 w-8 items-center justify-center"
          onClick={() => setIsMobileNavOpen((v) => !v)}
        >
          {isMobileNavOpen ? <IoClose className="h-6 w-6" /> : <IoMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileNavOpen && (
        <div className="ov-800:hidden absolute top-full left-0 right-0 mt-2 rounded-md border bg-white shadow-lg z-50">
          <div className="flex flex-col divide-y">
            {[
              { name: "Home", to: "/" },
              { name: "Contact", to: "/contact" },
              { name: "About", to: "/about" },
              { name: "Sign Up", to: "/signup" },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `px-4 py-3 ${isActive ? "bg-gray-100 text-red-500" : "hover:bg-gray-50"}`
                }
                onClick={() => setIsMobileNavOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
