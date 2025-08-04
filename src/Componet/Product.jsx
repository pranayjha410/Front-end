import React, { useState } from 'react'
import ShowMore from './ShowMore'
import Cart from './Cart';
const Product = ({title,img,price,description}) => {

const [cartCount,setCartCount] = useState(0);
 const [itemAdded, setItemAdded] = useState(false);
const handleToCart = ()=>{
   setCartCount(prev => itemAdded ? prev - 1 : prev + 1);
  setItemAdded(!itemAdded);
}

  return (
  <div className="w-screen px-10 py-10">
  <div className="flex items-start justify-between">
    {/* Left: Product Card */}
      <div className="border rounded-xl shadow-md p-4 max-w-sm">
    <img src={img} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
    <h2 className="text-lg font-bold">{title}</h2>
    <p className="text-green-600 font-semibold text-md mb-2">₹{price}</p>
    <ShowMore description={description} />

    <button
      className="bg-blue-600 text-white px-4 py-1 mt-2 rounded hover:bg-blue-700 transition"
      onClick={handleToCart}
    >
      {itemAdded ? 'Remove from Cart' : 'Add to Cart'}
    </button>
  </div>

    {/* Right: Cart */}
    <div className="pr-4">
      <Cart cartCount={cartCount} />
    </div>
  </div>
</div>

  )
}

export default Product
