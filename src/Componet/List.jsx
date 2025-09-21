import React from "react";
import ShowMore from "./ShowMore";
import QuantityControl from "./QuantityControl";

const List = ({
  curEle,
  itemAdded,
  handleToCart,
  handleRemoveItem,
  handleDecreaseQuantity,
  cartItems,
}) => {
  return (
    <div className="h-full"> 
      <div className="border rounded-xl shadow-md p-4 h-full flex flex-col">
        {/* Image */}
        <img
          src={curEle.image}
          alt={curEle.name}
          className="w-full h-48 object-contain rounded-lg mb-4 bg-gray-100"
        />

        {/* Product Info */}
        <h2 className="text-gray-900 font-medium text-lg">{curEle.name}</h2>
        <p className="text-blue-600 font-semibold">
          ₹{curEle.price}
        </p>

        {/* Description */}
        <div className="flex-grow text-gray-800 text-sm">
          <ShowMore description={curEle.description} />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-auto">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-2 rounded-lg shadow-md transition-colors duration-200 cursor-pointer"
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
                cartItems.find((item) => item.id === curEle.id)?.quantity || 1
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
