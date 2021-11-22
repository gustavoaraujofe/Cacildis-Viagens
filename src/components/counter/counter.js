import "./counter.css";
import { useState } from "react";

function Counter(props) {
  let [clickCount, setClickCount] = useState(0);

  const increaseCount = () => setClickCount(clickCount + 1);
  const decreaseCount = () => {
    if (clickCount > 0) setClickCount(clickCount - 1);
  };

  return (
    <div>
      <button className="counter btn-counter" onClick={decreaseCount}>-</button>
      <label>
        <input className="counter" type="text" name="name" value={clickCount} />
      </label>
      <button className="counter btn-counter" onClick={increaseCount}>+</button>
    </div>
  );
}

export default Counter;
