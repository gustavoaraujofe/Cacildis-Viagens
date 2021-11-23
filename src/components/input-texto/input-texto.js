import "./input-texto.css";
// import { FaPlane } from 'react-icons/fa';

function InputTexto(props) {
  return (
    <div>
      <div className="">
        <label>
          <input className="input-texto" type="text" name="nome" onChange={props.onChange} value={props.value} required={props.required}/>
        </label>
      </div>
    </div>
  );
}

export default InputTexto;
