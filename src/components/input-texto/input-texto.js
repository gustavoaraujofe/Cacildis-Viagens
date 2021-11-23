// import "./input-texto.css";

function InputTexto(props) {
  return (
    <div className="mb-3 mt-3">
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <label className="form-label w-100">
        <input
          className="form-control"
          type="text"
          value={props.value}
          name={props.name}
          id={props.id}
          onChange={props.onChange}
          checked={props.checked}
          required={props.required}
        />
      </label>
    </div>
  );
}

export default InputTexto;
