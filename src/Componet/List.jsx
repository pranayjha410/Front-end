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
        <h2 className="text-lg font-bold">{curEle.name}</h2>
        <p className="text-green-600 font-semibold text-md mb-2">
          ₹{curEle.price}
        </p>

        {/* Description */}
        <div className="flex-grow">
          <ShowMore description={curEle.description} />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-auto">
          <button
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
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
