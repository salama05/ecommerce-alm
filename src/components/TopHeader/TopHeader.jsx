import React from "react";
import DropdownMenuLanguage from "./DropdownMenuLanguage";

const TopHeader = () => {
  return (
    <header className="sm-430:text-font-xs-400 bg-black text-font-md-400 text-white">
      <div className="container mx-auto max-w-[1170px]">
        <div className="flex items-center justify-between">
          <div className="flex h-[48px] w-full items-center justify-center">
            <span className="text-center">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>
            <button className="sm-430:text-font-xs-400 pl-2 text-font-md-600 underline">
              Shop Now
            </button>
          </div>
          <span className="me-[10px] ml-auto">
            <DropdownMenuLanguage />
          </span>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
