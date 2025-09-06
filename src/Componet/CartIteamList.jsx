import React from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import sportData from "../api/Data.json";
import { FaTrashRestore } from "react-icons/fa";
import QuantityControl from "./QuantityControl";

const CartIteamList = ({
  cartItems,
  handleToCart,
  handleDecreaseQuantity,
  handleRemoveItem,
}) => {
  const cartProducts = sportData
    .filter((item) => cartItems.some((cartItem) => cartItem.id === item.id))
    .map((item) => {
      const cartItem = cartItems.find((c) => c.id === item.id);
      return { ...item, quantity: cartItem.quantity };
    });

  return (
    <div className="pt-20 px-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartProducts.length === 0 ? (
        <p className="flex justify-center items-center mt-32 font-semibold text-4xl text-red-600">
          No items in cart <FaCartArrowDown />
        </p>
      ) : (
        <ul className="space-y-4 relative">
          {cartProducts.map((item) => (
            <li key={item.id} className="flex items-center gap-4 border p-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="font-extrabold">₹{item.price}</p>

                {/* Quantity Controls */}
                <QuantityControl
                  handleToCart={handleToCart}
                  handleDecreaseQuantity={handleDecreaseQuantity}
                  id={item.id}
                  quantity={item.quantity}
                />
              </div>

              {/*  Fix: Trash should remove item, not call handleToCart */}
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="absolute right-4 text-[#177245] hover:text-red-500"
              >
                <FaTrashRestore className="text-2xl cursor-pointer" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartIteamList;
