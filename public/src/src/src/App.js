import React, { useState } from "react";
import './index.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const [isAsc, setIsAsc] = useState(true);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);

  const addToList = () => {
    if (count > 0 && !list.includes(count)) {
      setList([...list, count]);
    }
    setCount(0);
  };

  const sortList = () => {
    const sorted = [...list].sort((a, b) => (isAsc ? a - b : b - a));
    setList(sorted);
    setIsAsc(!isAsc);
  };

  return (
    <div className="container">
      <h1>RAIQA Health Counter</h1>
      <div>
        <button onClick={decrement}>-</button>
        <span style={{ margin: "0 15px" }}>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <button onClick={addToList}>Add</button>
        <button onClick={sortList}>
          Sort {isAsc ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className="list">
        {list.length === 0 && <li>No numbers added</li>}
        {list.map((num, idx) => (
          <li key={idx}>{num}</li>
        ))}
      </ul>
    </div>
  );
}
