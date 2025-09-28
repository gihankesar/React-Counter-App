import { useState, useRef } from "react";
import "./counter.css";

function App() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Orange", "Grapes"]);
  const [inputValue, setInputValue] = useState("");
  const [shake, setShake] = useState(false);
  const [newFruit, setNewFruit] = useState(null);
  const [removingFruit, setRemovingFruit] = useState(null); // Track removing fruit
  const inputRef = useRef(null);

  const removeFruit = (fruitRem) => {
    setRemovingFruit(fruitRem); // mark fruit as removing
    setTimeout(() => {
      setFruits(fruits.filter((fruit) => fruit !== fruitRem));
      setRemovingFruit(null); // reset
    }, 500); // match animation duration
  };

  const addFruit = () => {
    if (inputValue.trim() === "") return;

    if (fruits.some((fruit) => fruit.toLowerCase() === inputValue.toLowerCase())) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      inputRef.current.focus();
      return;
    }

    setFruits([...fruits, inputValue.trim()]);
    setNewFruit(inputValue.trim());
    setInputValue("");
    inputRef.current.focus();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") addFruit();
  };

  const FruitItem = ({ fruit, onRemove }) => (
    <li
      onClick={() => onRemove(fruit)}
      className={`${fruit === newFruit ? "new" : ""} ${fruit === removingFruit ? "removing" : ""}`}
    >
      {fruit}
    </li>
  );

  return (
    <div className="container">
      <h1>Fruit Basket 🍓</h1>
      <ul>
        {fruits.map((fruit) => (
          <FruitItem key={fruit} fruit={fruit} onRemove={removeFruit} />
        ))}
      </ul>
      <p>Click on a fruit to remove it from the basket.</p>
      <input
        ref={inputRef}
        type="text"
        placeholder="Add a new fruit"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className={shake ? "shake" : ""}
        autoFocus
      />
      <button onClick={addFruit}>Add Fruit</button>
    </div>
  );
}

export default App;
