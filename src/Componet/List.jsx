import React from "react";
import { useNavigate } from "react-router-dom";
import QuantityControl from "./QuantityControl";

const List = ({ curEle, cartItems, handleToCart, handleRemoveItem, handleDecreaseQuantity }) => {
  const navigate = useNavigate();
  const itemAdded = cartItems.some(item => item.id === curEle.id);

  return (
    <div className="h-full">
      <div className="border rounded-xl shadow-md p-4 h-full flex flex-col">
        {/* Image */}
        <img
          src={curEle.image}
          alt={curEle.name}
          className="w-full h-48 object-contain rounded-lg mb-4 bg-gray-100 cursor-pointer"
          onClick={() => navigate(`/product/${curEle.id}`)}
        />

        {/* Product Info */}
        <h2 className="text-gray-900 font-medium text-lg">{curEle.name}</h2>
        <p className="text-blue-600 font-semibold">₹{curEle.price}</p>
        <p className="flex-grow text-gray-800 text-sm">{curEle.description}</p>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-2 rounded-lg shadow-md"
            onClick={() => itemAdded ? handleRemoveItem(curEle.id) : handleToCart(curEle.id)}
          >
            {itemAdded ? "Remove from Cart" : "Add to Cart"}
          </button>

          {itemAdded && (
            <QuantityControl
              id={curEle.id}
              quantity={cartItems.find(item => item.id === curEle.id)?.quantity || 1}
              handleToCart={handleToCart}
              handleDecreaseQuantity={handleDecreaseQuantity}
            />
          )}

          <button
            className="bg-gray-700 hover:bg-gray-800 text-white font-semibold px-3 py-2 rounded-lg shadow-md"
            onClick={() => navigate(`/product/${curEle.id}`)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
