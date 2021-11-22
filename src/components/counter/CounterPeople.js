import "./counter.css";

function Counter(props) {
  return (
    <div>
      {props.label}
      <div>
        <button
          className="counter btn-counter left"
          onClick={props.decreaseCount}
        >
          -
        </button>
        <label htmlFor={props.id} className="form-label">
          <input
            className="counter"
            type="text"
            name={props.name}
            onChange={props.onChange}
            value={props.value}
            required={props.required}
          />
        </label>
        <button
          className="counter btn-counter right"
          onClick={props.increaseCount}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
