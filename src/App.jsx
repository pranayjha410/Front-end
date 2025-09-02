import CartPage from "./Componet/CartPage";
import Home from "./Componet/Home";
import { Routes,Route } from "react-router-dom";
import Navbar from "./Componet/Navbar";
function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<div>Products Page Coming Soon</div>} />
      <Route path="/about" element={<div>About Us Page Coming Soon</div>} />
      <Route path="/contact" element={<div>Contact Page Coming Soon</div>} />

      <Route path="/CartPage" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
