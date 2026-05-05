import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // 1. Import the Provider
import Home from "./pages/Home";
import Products from "./pages/Products";
import AboutUs from "./components/AboutUs";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";


function App() {
  return (
    <CartProvider> {/* 2. Provider MUST wrap the Router */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;