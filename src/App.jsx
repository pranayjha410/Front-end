import CartPage from "./Pages/CartPage";
import Home from "./Pages/Home";
import { Routes,Route } from "react-router-dom";
import Navbar from "./Componet/Navbar";
import { useState } from "react";
import NotFound from "./Componet/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";


function App() {

  const [cartItems, setCartItems] = useState([]);

  //we need to stroe whole array instead of just id 

 const handleToCart = (productId) => {
  setCartItems((prevItems) => {
    const existingItem = prevItems.find((item) => item.id === productId);

    if (existingItem) {
      // increase the quantity
     toast.info("Quantity increased!", {
  autoClose: 2000,
  className: "text-3g font-semibold",  // (also fix typo: "3g" → "3xl")
});

      return prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // Add new item with quantity
      toast.success("Item added to cart!", {
  autoClose: 2000,
  className: "text-3g font-semibold",
});

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
  setCartItems((prevItems) =>{
    toast.error("Item removed from cart!" , {
  className: "text-3g font-semibold", // Tailwind classes
});

    return prevItems.filter((item) => item.id !== productId)
});
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

      <Route path="*" element={<NotFound/>} />
      </Routes>

       <ToastContainer
  position="bottom-right"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  pauseOnHover
  theme="colored"
/>
    </div>
  );
}

export default App;
