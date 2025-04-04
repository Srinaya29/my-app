import React, { useContext } from "react";
import "./Products.css";
import { appContext } from "../App";

export default function Products() {
  const { user, products, cart, setCart } = useContext(appContext);

  const addToCart = (id) => {
    if (!cart[id]) setCart({ ...cart, [id]: 1 });
  };

  const increment = (id) => {
    setCart({ ...cart, [id]: cart[id] + 1 });
  };

  const decrement = (id) => {
    if (cart[id] > 1) {
      setCart({ ...cart, [id]: cart[id] - 1 });
    } else {
      const newCart = { ...cart };
      delete newCart[id];
      setCart(newCart);
    }
  };

  return (
    <div className="App-Products-Container">
      <h2 className="Welcome-User">Welcome {user.email || "Guest"}!</h2>
      <div className="App-Products-Row">
        {products.map((value) => (
          <div key={value.id} className="App-Products-Box">
            <img src={value.imgUrl} alt={value.name} className="Product-Image" />
            <h3>{value.name}</h3>
            <p>{value.desc}</p>
            <h4>₹ {value.price}</h4>
            {cart[value.id] > 0 ? (
              <div className="Cart-Controls">
                <button onClick={() => decrement(value.id)}>-</button>
                <span className="Quantity">{cart[value.id]}</span>
                <button onClick={() => increment(value.id)}>+</button>
              </div>
            ) : (
              <button onClick={() => addToCart(value.id)} className="Add-Button">
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
