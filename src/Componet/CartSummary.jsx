import React from 'react'
import sportdata from "../api/Data.json"

const CartSummary = ({cartItems}) => {
  const cartProducts = sportdata
  .filter((item) => cartItems.some((cartItem) => cartItem.id === item.id))
  .map((item) => {
    const cartItem = cartItems.find((c) => c.id === item.id);
    return { ...item, quantity: cartItem.quantity };
  });

const totalItems = cartProducts.reduce((acc, item) => acc + item.quantity, 0);
const subtotalAmount = cartProducts.reduce((acc, item) => acc + item.price * item.quantity, 50);


   

  return (
     <div className="border p-6 rounded-lg shadow-lg bg-white mr-6">
      <h2 className="text-lg font-bold mb-4">Order Summary</h2>
      <p className="mb-2">Total Items: {totalItems}</p>
      <p className="mb-2 font-semibold" >Delivery: ₹50</p>
      <p className="mb-4 font-bold">Total Amount: ₹{subtotalAmount}</p>
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Proceed to Pay
      </button>
    </div>
   
  )
}

export default CartSummary
