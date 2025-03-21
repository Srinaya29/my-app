import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";  // Import Footer component
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Product from "./components/Product";

function App() {
  return (
    <Router>
      <Header />
      <div style={{ minHeight: "90vh" }}> {/* Ensures space for the footer */}
        <Routes>
        <Route index element={<Product />} />
        <Route path="home" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        </Routes>
      </div>
      <Footer /> {/* Footer at the bottom */}
    </Router>
  );
}

export default App;
