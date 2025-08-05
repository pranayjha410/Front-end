import React, { useState } from "react";
import ShowMore from "./ShowMore";
import Cart from "./Cart";
import sportData from "../api/Data.json";
import List from "./List";

const Product = () => {
  const [cartItems, setCartItems] = useState([]); // holds array of added product IDs

  const handleToCart = (productId) => {
    setCartItems(
      (prevItems) =>
        prevItems.includes(productId)
          ? prevItems.filter((id) => id !== productId) // remove from cart
          : [...prevItems, productId] // add to cart
    );
  };

  return (
    <div className="w-screen px-10 py-10">
      <div className="flex items-start justify-between">
        {/* Left: Product Card */}
        <ul>
          {sportData.map((curEle) => (
            <List
              key={curEle.id}
              curEle={curEle}
              itemAdded={cartItems.includes(curEle.id)}
              handleToCart={() => handleToCart(curEle.id)}
            >
              
            </List>
          ))}
        </ul>

        {/* Right: Cart */}
        <div className="pr-4">
          <Cart cartCount={cartItems.length} />
        </div>
      </div>
    </div>
  );
};

export default Product;
