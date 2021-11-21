import "./input-texto.css";
import { FaPlane } from 'react-icons/fa';

function InputTexto(props) {
  return (
    <div>
      <div className="">
        <label>
         <FaPlane />
          <input className="input-texto" type="text" name="name" value="" />
        </label>

        <span></span>
      </div>
    </div>
  );
}

export default InputTexto;
