import React from "react";
import { NavLink, Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

const Header = () => {
  return (
    <header className="mx-auto mt-10 flex h-[38px] max-w-[1170px] items-center justify-between px-4">
      {/* Logo */}
      <div className="font-inter text-font-4xl-700">Exclusive</div>

      {/* Navigation Links */}
      <nav className="flex space-x-12 text-font-lg-400">
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
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Search and Icons */}
      <div className="flex items-center justify-between">
        <div className="relative mr-6 shadow-lg">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="h-[38px] w-[243px] rounded-md bg-color-second-2 pl-5 pr-8 font-poppins text-font-sm-400"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 transform">
            <IoSearchOutline />
          </button>
        </div>

        <Link to="/wishlist" className="flex h-8 w-8 items-center justify-center">
          <FaRegHeart />
        </Link>

        <Link to="/cart" className="flex h-8 w-8 items-center justify-center">
          <IoCartOutline className="h-5 w-5" />
        </Link>

        <Link to="/account" className="flex h-8 w-8 items-center justify-center">
          <VscAccount className="h-5 w-5" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
