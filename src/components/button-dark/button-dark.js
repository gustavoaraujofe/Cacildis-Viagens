import "./button-dark.css";
import { Link } from "react-router-dom";

function ButtonDark(props) {
  return (
    <Link to={props.to}>
      <button className='btn-dark' onClick={props.onClick}>
        {props.content}
        </button>
    </Link>
  );
}

export default ButtonDark;