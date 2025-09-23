import React, { useState } from "react";

import List from "../Componet/List";
import sportData from "../api/Data.json";
import SearchBar from "../Componet/SearchBar";

const ProductCard = ({
  cartItems,
  handleToCart,
  handleRemoveItem,
  handleDecreaseQuantity,
  query,
  setQuery,
}) => {
  const [category, setCategory] = useState("All");
  const categories = [
    "All",
    ...new Set(sportData.map((item) => item.category)),
  ];

  const filteredProducts = sportData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory =
      category === "All" || item.category === category; 

    // product only shown if BOTH are true
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="pt-20 px-6">
        {/* category filter dropdown */}
        <div className="mb-6 flex justify-start absolute top-4 left-4 ml-2">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-lg px-4 py-2 shadow-sm focus:outline-none"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {filteredProducts.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((curEle) => (
              <List
                key={curEle.id}
                curEle={curEle}
                itemAdded={cartItems.some((item) => item.id === curEle.id)}
                handleToCart={handleToCart}
                handleRemoveItem={handleRemoveItem}
                handleDecreaseQuantity={handleDecreaseQuantity}
                cartItems={cartItems}
              />
            ))}
          </ul>
        ) : (
          <p className="col-span-full text-center mt-40 text-gray-500 text-lg font-medium">
            No products match your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
