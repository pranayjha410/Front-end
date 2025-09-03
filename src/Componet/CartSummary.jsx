import React from 'react'
import sportdata from "../api/Data.json"

const CartSummary = ({cartItems}) => {
   const cartProducts = sportdata.filter((item) => cartItems.includes(item.id));
    const totalAmount = cartProducts.reduce((acc, item) => acc + item.price, 0);
   

  return (
     <div className="border p-6 rounded-lg shadow-lg bg-white mr-6">
      <h2 className="text-lg font-bold mb-4">Order Summary</h2>
      <p className="mb-2">Total Items: {cartProducts.length}</p>
      <p className="mb-4 font-semibold">Total Amount: ₹{totalAmount}</p>
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Proceed to Pay
      </button>
    </div>
   
  )
}

export default CartSummary
