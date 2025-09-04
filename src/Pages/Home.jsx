import React from "react";
import ShowMore from "../Componet/ShowMore";
import List from "../Componet/List";
import sportData from "../api/Data.json";

const Product = ({ cartItems, handleToCart, handleRemoveItem }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-20 px-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sportData.map((curEle) => (
            <List
              key={curEle.id}
              curEle={curEle}
              itemAdded={cartItems.some((item) => item.id === curEle.id)}
              handleToCart={handleToCart}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Product;
