import "./input-texto.css";

function InputTexto(props) {
  return (
    <div>
      <div className="">
        <label>
          <input className="input-texto" type="text" name="name" value="Texto" />
        </label>
        <span>{<i data-feather="circle"></i>}</span>
      </div>
    </div>
  );
}

export default InputTexto;
