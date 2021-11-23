import "./input-data.css";

function InputData(props) {
  return (
    <div>
      

      <label htmlFor={props.id} className="form-label ">{props.label}</label>
      <input
        className="form-control"
        type="date"
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        required={props.required}
      />
    </div>
  );
}

export default InputData;
