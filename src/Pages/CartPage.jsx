import React from "react";
import CartIteamList from "../Componet/CartIteamList";
import CartSummary from "../Componet/CartSummary";

const CartPage = ({ cartItems,handleToCart }) => {
  return (
  <div className="flex flex-col md:flex-row gap-16 items-start">
  <div className="flex-1">
   <CartIteamList cartItems={cartItems} handleToCart={handleToCart} />

  </div>
{cartItems.length > 0 ? (
  <div className="w-full md:w-80 lg:w-96 sticky top-24">
    <CartSummary cartItems={cartItems} />
  </div>
) : null}

</div>

  );
};

export default CartPage;
