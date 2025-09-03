import React from 'react'

const CartSummary = ({cartItems}) => {
    const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="w-full md:w-1/3 border p-6 rounded-lg shadow-lg h-fit">
      <h2 className="text-lg font-bold mb-4">Order Summary</h2>
      <p className="mb-2">Total Items: {cartItems.length}</p>
      <p className="mb-4 font-semibold">Total Amount: ₹{totalAmount}</p>
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Proceed to Pay
      </button>
    </div>
  )
}

export default CartSummary
