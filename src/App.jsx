import CartPage from "./Componet/CartPage";
import Home from "./Componet/Home";
import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <div >
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CartPage" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
