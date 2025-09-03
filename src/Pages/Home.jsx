import React, { useState } from "react";
import ShowMore from "../Componet/ShowMore";
import Cart from "../Componet/Cart";
import sportData from "../api/Data.json";
import List from "../Componet/List";
import Navbar from "../Componet/Navbar";

const Product = ({ cartItems, handleToCart }) => {
  

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar fixed at top with no spacing issues */}
      {/* <div className="fixed top-0 left-0 w-full z-10">
        <Navbar cartCount={cartItems.length} />
      </div> */}

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
