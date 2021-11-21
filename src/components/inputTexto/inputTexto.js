import "./inputTexto.css";

function InputTexto(props) {
  return (
    <div>
      <div className="">
        <label>
          <input
            className="inputTexto"
            type="text"
            name="name"
            value="Texto"
          />
        </label>
      </div>
    </div>
  );
}

export default InputTexto;
