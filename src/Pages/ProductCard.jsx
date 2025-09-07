import React, { useState } from 'react'
import ShowMore from "../Componet/ShowMore";
import List from "../Componet/List";
import sportData from "../api/Data.json";
import SearchBar from '../Componet/SearchBar';

const ProductCard = ({ cartItems, handleToCart, handleRemoveItem,handleDecreaseQuantity }) => {

  const [query, setQuery] = useState('');
  const filteredProudct = sportData.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
  
  return (
    <div className="min-h-screen bg-white">
         <div className="pt-20 px-6">

           <div className="mb-6 flex justify-center">
          <SearchBar query={query} setQuery={setQuery} />
        </div>


           <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
             {filteredProudct.map((curEle) => (
              
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
         </div>
       </div>
  )
}

export default ProductCard
