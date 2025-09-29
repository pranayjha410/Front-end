import React, { useState, useEffect } from "react";
import List from "../Componet/List";
import axios from "axios";

const ProductCard = ({
  cartItems,
  handleToCart,
  handleRemoveItem,
  handleDecreaseQuantity,
  query,
  setQuery,
}) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://68d3a808214be68f8c66aca9.mockapi.io/products"
        );
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = ["All", ...new Set(products.map((item) => item.category))];

  const filteredProducts = products.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "All" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="pt-20 px-6">
        {/* Category Dropdown */}
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
            {filteredProducts.map((product) => (
              <List
                key={product.id}
                curEle={product}
                cartItems={cartItems}
                handleToCart={handleToCart}
                handleRemoveItem={handleRemoveItem}
                handleDecreaseQuantity={handleDecreaseQuantity}
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
