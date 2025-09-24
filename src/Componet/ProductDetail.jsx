import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import sportData from "../api/Data.json"; // your local products

const ProductDetail = ({ cartItems, handleToCart, handleRemoveItem, handleDecreaseQuantity }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find product from local data
  const product = sportData.find(item => String(item.id) === String(id));

  if (!product) return <p className="text-center mt-20">Product not found.</p>;

  const itemInCart = cartItems.find(item => String(item.id) === String(id));
  const itemAdded = !!itemInCart;
  const quantity = itemInCart?.quantity || 1;

  return (
    <div className="min-h-screen flex flex-col md:flex-row p-6 gap-6 max-w-6xl mx-auto">
      {/* Left: Image */}
      <div className="md:w-1/2 flex justify-center items-center">
        <img src={product.image} alt={product.name} className="w-full h-auto max-h-[400px] object-contain rounded-lg shadow-md" />
      </div>

      {/* Right: Details */}
      <div className="md:w-1/2 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-xl font-semibold text-blue-600">₹{product.price}</p>
        <p className="text-gray-700">{product.description}</p>

        <div className="flex flex-wrap gap-3 mt-4 items-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition"
            onClick={() =>
              itemAdded ? handleRemoveItem(product.id) : handleToCart(product.id)
            }
          >
            {itemAdded ? "Remove from Cart" : "Add to Cart"}
          </button>

          {itemAdded && (
            <div className="flex items-center gap-2">
              <button
                className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400 transition"
                onClick={() => handleDecreaseQuantity(product.id)}
              >
                -
              </button>
              <span className="px-2">{quantity}</span>
              <button
                className="bg-gray-300 px-3 py-1 rounded hover:bg-gray-400 transition"
                onClick={() => handleToCart(product.id)}
              >
                +
              </button>
            </div>
          )}

          <button
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
