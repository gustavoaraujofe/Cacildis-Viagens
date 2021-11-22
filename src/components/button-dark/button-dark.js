import "./button-dark.css";

function ButtonDark(props) {
  return (
    <div>
      <button className='btn-dark'>
        {props.content}
        </button>
    </div>
  );
}

export default ButtonDark;