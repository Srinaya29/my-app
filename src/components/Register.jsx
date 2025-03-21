import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsers((prevUsers) => [...prevUsers, user]);
    setUser({ name: "", email: "", password: "" }); // Reset input fields
  };

  const removeUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div className="App-Register-Row">
      <div>
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <p>
            <input
              type="text"
              placeholder="Enter name"
              value={user.name}
              onChange={(e) => setUser((prev) => ({ ...prev, name: e.target.value }))}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Email address"
              value={user.email}
              onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}
            />
          </p>
          <p>
            <input
              type="password"
              placeholder="New password"
              value={user.password}
              onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
            />
          </p>
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
        <p>
          <Link to="../login">Already a member? Log In</Link>
        </p>
      </div>

      <div>
        <h2>Registered Users</h2>
        <ul>
          {users.map((value, index) => (
            <li key={index}>
              {value.name} - {value.email} - {value.password}  
              <button onClick={() => removeUser(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
