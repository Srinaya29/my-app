import "./Header.css";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { appContext } from "../App";

export default function Header() {
  const { user, setUser, cart, products, orders } = useContext(appContext);
  const items = products.filter((product) => cart[product.id] > 0);
  const [myOrder, setMyOrder] = useState([]);

  useEffect(() => {
    setMyOrder(orders.filter((order) => order.email === user.email));
  }, [orders, user]);

  const handleLogout = () => {
    setUser({ name: "", email: "", password: "" });
  };

  return (
    <div className="App-Header-Row">
      <h2>React Store</h2>
      <div className="App-Header-Links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({items.length})</Link>
        {myOrder.length > 0 && (
          <Link to="/orders">Orders ({myOrder.length})</Link>
        )}
        {user.email ? (
          <Link to="/login" onClick={handleLogout}>Logout</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
}
