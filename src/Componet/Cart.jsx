import React from 'react'
import { FaCartArrowDown } from "react-icons/fa6";

const Cart = ({cartCount}) => {
  return (
    <div>
        <p>{cartCount}</p>
      <FaCartArrowDown className='text-5xl '/>
    </div>
  )
}

export default Cart
