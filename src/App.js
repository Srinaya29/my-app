import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Product from "./components/Product";  // Check this import

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
