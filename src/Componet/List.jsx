import React from "react";
import ShowMore from "./ShowMore";
const List = ({ curEle, itemAdded, handleToCart,handleRemoveItem }) => {
  return (
    <div>
      <div className="border rounded-xl shadow-md p-4 max-w-sm">
        <img
          src={curEle.image}
          alt={curEle.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-lg font-bold">{curEle.name}</h2>
        <p className="text-green-600 font-semibold text-md mb-2">
          ₹{curEle.price}
        </p>
        <ShowMore description={curEle.description} />

     <button
  className="bg-blue-600 text-white px-4 py-1 mt-2 rounded hover:bg-blue-700 transition"
  onClick={() =>
    itemAdded ? handleRemoveItem(curEle.id) : handleToCart(curEle.id)
  }
>
  {itemAdded ? "Remove from Cart" : "Add to Cart"}
</button>

      </div>
    </div>
  );
};

export default List;
