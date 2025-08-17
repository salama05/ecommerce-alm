import React from "react";
import iPhoneImage from "../assets/AdBanner/Photo_3.jpg";

const AdBanner = () => {
  return (
    <div className="relative flex h-48 sm:h-64 w-full items-center justify-center bg-black px-4 sm:px-6 text-white">
      <div className="absolute left-4 sm:left-8 top-4 sm:top-8">
        <img
          src={iPhoneImage}
          alt="Apple"
          className="mb-2 h-4 w-4 sm:h-6 sm:w-6"
          loading="lazy"
        />
        <p className="text-xs sm:text-sm">iPhone 14 Series</p>
      </div>

      <div className="text-center">
        <p className="text-2xl sm:text-4xl font-semibold">Up to 10% off Voucher</p>
        <button className="mt-4 rounded-full bg-white px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium text-black hover:bg-gray-200">
          Shop Now →
        </button>
      </div>

      <img
        src={iPhoneImage}
        alt="iPhone 14"
        className="absolute right-4 sm:right-8 top-8 sm:top-10 h-auto w-24 sm:w-44"
        loading="lazy"
      />
    </div>
  );
};

export default AdBanner;
