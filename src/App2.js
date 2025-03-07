import React from 'react'
import {useState} from "react";
export default function App2() {
    const [count, setCount]=useState(0);
    const increment=() =>{
    setCount(count+1)   
    }
    const decrement=() =>{
        count=count-1;    
        }
  return (
    <div>
        <button onClick={decrement}>-</button>
        {count}
        <button onclick={increment}>+</button>
    </div>
  );
}