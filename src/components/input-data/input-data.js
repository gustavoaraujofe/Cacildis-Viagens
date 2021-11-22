import "./input-data.css";

function InputData(props) {
  return (
    <div>
      {props.label}
      <div>
        <label htmlFor={props.id} className="form-label"></label>
        <input
          type="date"
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          required={props.required}
        />
      </div>
    </div>
  );
}

export default InputData;
