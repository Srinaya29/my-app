import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="App-Header-Row">
        <div><h1>React Store</h1></div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </div>
    </div>
  );
}

