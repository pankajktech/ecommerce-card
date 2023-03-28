import React from "react";

import iconCart from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center lg:mx-32 p-6 border-b border-b-slate-300">
      <div className="flex items-center justify-center">
        <img src={logo} alt="logo" className="mr-20" />
        <ul className="flex gap-10 opacity-70 max-sm:hidden">
          <li className="hover:text-orange-700 cursor-pointer">Collections</li>
          <li className="hover:text-orange-700 cursor-pointer">Men</li>
          <li className="hover:text-orange-700 cursor-pointer">Women</li>
          <li className="hover:text-orange-700 cursor-pointer">About</li>
          <li className="hover:text-orange-700 cursor-pointer">Contact</li>
        </ul>
      </div>
      <div className="flex items-center">
        <img
          src={iconCart}
          alt="iconCart"
          className="w-6 h-6 mx-5 cursor-pointer hover:scale-105 duration-300"
        />

        <img
          src={Avatar}
          alt="Avatar"
          className="w-14 h-14 mx-5 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
