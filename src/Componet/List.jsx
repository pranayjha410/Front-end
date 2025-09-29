import React from "react";
import { useNavigate } from "react-router-dom";
import QuantityControl from "./QuantityControl";

const List = ({ curEle, cartItems, handleToCart, handleRemoveItem, handleDecreaseQuantity }) => {
  const navigate = useNavigate();
  const itemAdded = cartItems.some(item => item.id === curEle.id);

  return (
    <div className="h-full">
      {/* Card */}
      <div
        className="border rounded-xl shadow-md p-4 flex flex-col justify-between 
                   transition-transform duration-300 ease-in-out hover:scale-105 
                   max-w-xs mx-auto h-full bg-white"
      >
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
        
        {/* Description */}
        <div className="text-gray-800 text-sm mt-1">
          {curEle.description.length > 50
            ? `${curEle.description.substring(0, 50)}...`
            : curEle.description}
          {curEle.description.length > 50 && (
            <span
              className="text-blue-600 cursor-pointer ml-1 hover:underline"
              onClick={() => navigate(`/product/${curEle.id}`)}
            >
              Show More
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <button type="button"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-2 rounded-lg shadow-md"
            onClick={() =>
              itemAdded ? handleRemoveItem(curEle.id) : handleToCart(curEle.id)
            }
          >
            {itemAdded ? "Remove from Cart" : "Add to Cart"}
          </button>

          {itemAdded && (
            <QuantityControl
              id={curEle.id}
              quantity={
                cartItems.find(item => item.id === curEle.id)?.quantity || 1
              }
              handleToCart={handleToCart}
              handleDecreaseQuantity={handleDecreaseQuantity}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
