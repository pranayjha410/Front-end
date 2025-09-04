import React from "react";

const QuantityControl = ({handleToCart,handleDecreaseQuantity,id,quantity}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mt-2">
        <button
          onClick={() => handleDecreaseQuantity(id)}
          className="px-2 bg-gray-300 rounded"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => handleToCart(id)}
          className="px-2 bg-gray-300 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityControl;
