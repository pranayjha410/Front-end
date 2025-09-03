import React from "react";
import { FaCartArrowDown } from "react-icons/fa6";


const Cart = ({ cartCount }) => {
  return (
    <div className="relative">
      <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
        {cartCount}
      </span>
      <FaCartArrowDown className="text-3xl text-green-400" />
    </div>
  );
};

export default Cart;
