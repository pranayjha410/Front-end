import React from "react";
import CartIteamList from "../Componet/CartIteamList";
import CartSummary from "../Componet/CartSummary";

const CartPage = ({ cartItems }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="flex  flex-col md:flex-row gap-16  items-start  ">
        <div className="flex-1">
          <CartIteamList cartItems={cartItems} />
        </div>
        <div className="w-full md:w-80 lg:w-96 ">
          <div className="sticky top-24 bg-white
           p-4 rounded-1g shadow "></div>
          <CartSummary cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
