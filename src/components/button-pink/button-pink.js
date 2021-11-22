import "./button-pink.css";

function ButtonPink(props) {
  return (
    <div>
      <button className='btn-pink'>
        {props.content}
        </button>
    </div>
  );
}

export default ButtonPink;
