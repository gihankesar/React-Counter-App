import { useState } from 'react'
import './counter.css'



function App() {
  return (
    <div>
      <Counter />
    </div>
  );
};
 
export default App;

function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("black");

const handleIncrement = () => {
  setCount(count + 1);
  setColor("green");
};
const handleDecrement = () => {
  setCount(count < 0 ? null : count - 1);
  setColor("red");
};
const handleReset = () => {
  setCount(0);
  setColor("black");
};


  return (
    <div>
      <h1 className="counter" style={{color : color}}>Counter: {count}</h1>
      <button onClick={() => handleIncrement()}>Increment +1</button>
      <button onClick={() => handleDecrement()}>Decrement -1</button>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
};
