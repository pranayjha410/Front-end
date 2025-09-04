import CartPage from "./Pages/CartPage";
import Home from "./Pages/Home";
import { Routes,Route } from "react-router-dom";
import Navbar from "./Componet/Navbar";
import { useState } from "react";

function App() {

  const [cartItems, setCartItems] = useState([]);

  //we need to stroe whole array instead of just id 

 const handleToCart = (productId) => {
  setCartItems((prevItems) => {
    const existingItem = prevItems.find((item) => item.id === productId);

    if (existingItem) {
      // increase the quantity
      return prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // Add new item with quantity
      return [...prevItems, { id: productId, quantity: 1 }];
    }
  });
};


  //new fuction for decremnt of quantiy 

  const handleDecreaseQuantity = (productId) => {
  setCartItems((prevItems) =>
    prevItems.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  );
};

const handleRemoveItem = (productId) => {
  setCartItems((prevItems) =>
    prevItems.filter((item) => item.id !== productId)
  );
};



  return (
    <div >
     <Navbar cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)} />


      <Routes>
      <Route path="/" element={<Home cartItems={cartItems} handleToCart={handleToCart}  handleRemoveItem={handleRemoveItem} handleDecreaseQuantity={handleDecreaseQuantity} />} />
      <Route path="/product" element={<div>Products Page Coming Soon</div>} />
      <Route path="/about" element={<div>About Us Page Coming Soon</div>} />
      <Route path="/contact" element={<div>Contact Page Coming Soon</div>} />

      <Route path="/CartPage" element={<CartPage cartItems={cartItems} handleToCart={handleToCart}  handleDecreaseQuantity={handleDecreaseQuantity}  handleRemoveItem={handleRemoveItem}/>} />
      </Routes>
    </div>
  );
}

export default App;
