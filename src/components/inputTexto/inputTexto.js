import "./inputTexto.css";

function InputTexto(props) {
  return (
    <div>
      <div className="inputTexto">
        <label>
          <input
            className="input"
            type="text"
            name="name"
            value="Enviar"
            style={{
              borderRadius: "9px",
              padding: "20px 30px",
              color: "violet",
              backgroundColor: "white",
              fontWeight: "bold",
            }}
          />
        </label>
      </div>
    </div>
  );
}

export default InputTexto;
