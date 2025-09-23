import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import sportData from "../api/Data.json";

const ProductDetail = ({ cartItems, handleToCart, handleRemoveItem, handleDecreaseQuantity }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = sportData.find((item) => item.id === Number(id));

  if (!product) return <p className="text-center mt-20">Product not found.</p>;

  const itemAdded = cartItems.some((item) => item.id === product.id);
  const quantity = cartItems.find((item) => item.id === product.id)?.quantity || 1;

  return (
    <div className="min-h-screen flex flex-col md:flex-row p-6 gap-6">
      {/* Left: Image */}
      <div className="md:w-1/2 flex justify-center items-center">
        <img src={product.image} alt={product.name} className="w-full h-auto max-h-[440px] object-contain rounded-lg bg-center" />
      </div>

      {/* Right: Details */}
      <div className="md:w-1/2 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.name} <span className="text-yellow-400">({product.rating}/5)</span></h1>
        <h2 className="text-2xl font-extrabold text-blue-600">₹{product.price}</h2>
        <p className="text-gray-800">{product.description}</p>

        <div className="flex gap-3 mt-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg"
            onClick={() =>
              itemAdded ? handleRemoveItem(product.id) : handleToCart(product.id)
            }
          >
            {itemAdded ? "Remove from Cart" : "Add to Cart"}
          </button>

          {itemAdded && (
            <div className="flex items-center gap-2">
              <button
                className="bg-gray-300 px-3 py-1 rounded"
                onClick={() => handleDecreaseQuantity(product.id)}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="bg-gray-300 px-3 py-1 rounded"
                onClick={() => handleToCart(product.id)}
              >
                +
              </button>
            </div>
          )}

          <button
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
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
