// react-router-dom
import { Routes, Route } from "react-router-dom";
// pages
import { Cart, Home, Product } from "./pages";
// components
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
