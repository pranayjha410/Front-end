import React from 'react'
import { FaCartArrowDown } from "react-icons/fa6";
import sportData from "../api/Data.json"

const CartIteamList = ({cartItems}) => {
    
    const cartProducts = sportData.filter((item) => cartItems.includes(item.id));
    

    
    return (
     <div className="pt-20 px-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartProducts.length === 0 ? (
        <p className=" flex justify-center items-center mt-32 font-semibold text-4xl text-red-600">
          No items in cart
          <FaCartArrowDown></FaCartArrowDown>
        </p>
      ) : (
        <ul className="space-y-4">
          {cartProducts.map((item) => (
            <li key={item.id} className="flex items-center gap-4 border p-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p>₹{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CartIteamList
