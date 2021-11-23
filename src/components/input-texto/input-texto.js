import "./input-texto.css";

function InputTexto(props) {
  return (
    <div>
      <div className="">
        <label>
          <input
            className="input-texto"
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
    </div>
  );
}

export default InputTexto;
