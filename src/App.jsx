import CartPage from "./Pages/CartPage";
import Home from "./Pages/Home";
import { Routes,Route } from "react-router-dom";
import Navbar from "./Componet/Navbar";
import { useState } from "react";

function App() {

  const [cartItems, setCartItems] = useState([]);

  const handleToCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.includes(productId)
        ? prevItems.filter((id) => id !== productId) // remove
        : [...prevItems, productId] // add
    );
  };




  return (
    <div >
      <Navbar  cartCount={cartItems.length}/>

      <Routes>
      <Route path="/" element={<Home cartItems={cartItems} handleToCart={handleToCart} />} />
      <Route path="/product" element={<div>Products Page Coming Soon</div>} />
      <Route path="/about" element={<div>About Us Page Coming Soon</div>} />
      <Route path="/contact" element={<div>Contact Page Coming Soon</div>} />

      <Route path="/CartPage" element={<CartPage cartItems={cartItems} handleToCart={handleToCart} />} />
      </Routes>
    </div>
  );
}

export default App;
