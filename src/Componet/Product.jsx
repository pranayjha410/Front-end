import React from 'react'
import ShowMore from './ShowMore'
const Product = ({title,img,price,description}) => {
  return (
   
   
   <div className="border rounded-xl shadow-md p-4 max-w-sm">
      <img src={img} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-green-600 font-semibold text-md mb-2">₹{price}</p>
      <ShowMore description={description} />
      <button className="bg-blue-600 text-white px-4 py-1 mt-2 rounded hover:bg-blue-700 transition">Add to Cart</button>
    </div>


  )
}

export default Product
