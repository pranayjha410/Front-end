import { Routes, Route } from "react-router-dom";
import Navbar from "./Componet/Navbar";
import NotFound from "./Componet/NotFound";
import CartPage from "./Pages/CartPage";
import ProductCard from "./Pages/ProductCard";
import Home from "./Pages/Home";
import Footer from "./Componet/Footer";
import ProductDetail from "./Componet/ProductDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "./Hooks/UseCart";
import { useState } from "react";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  const { cartItems, handleToCart, handleDecreaseQuantity, handleRemoveItem } =
    useCart();
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      {/* NavBAr */}
      <Navbar
        cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
        query={query}
        setQuery={setQuery}
      />

      {/* Main Boady */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/product"
            element={
              <ProductCard
                cartItems={cartItems}
                handleToCart={handleToCart}
                handleRemoveItem={handleRemoveItem}
                handleDecreaseQuantity={handleDecreaseQuantity}
                query={query}
                setQuery={setQuery}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetail
                cartItems={cartItems}
                handleToCart={handleToCart}
                handleRemoveItem={handleRemoveItem}
                handleDecreaseQuantity={handleDecreaseQuantity}
              />
            }
          />
          <Route
            path="/cartPage"
            element={
              <CartPage
                cartItems={cartItems}
                handleToCart={handleToCart}
                handleRemoveItem={handleRemoveItem}
                handleDecreaseQuantity={handleDecreaseQuantity}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
      />

      <Footer />
    </div>
  );
}

export default App;
