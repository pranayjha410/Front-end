import React, { useState } from "react";
import ShowMore from "./ShowMore";
import Cart from "./Cart";
import sportData from "../api/Data.json";
import List from "./List";
import Navbar from "./Navbar";

const Product = () => {
  const [cartItems, setCartItems] = useState([]); // holds array of added product IDs

  const handleToCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.includes(productId)
        ? prevItems.filter((id) => id !== productId)
        : [...prevItems, productId]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar fixed at top with no spacing issues */}
      <div className="fixed top-0 left-0 w-full z-10">
        <Navbar cartCount={cartItems.length} />
      </div>

      {/* Padding to prevent content hiding behind fixed navbar */}
      <div className="pt-20 px-6">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sportData.map((curEle) => (
            <List
              key={curEle.id}
              curEle={curEle}
              itemAdded={cartItems.includes(curEle.id)}
              handleToCart={() => handleToCart(curEle.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Product;
