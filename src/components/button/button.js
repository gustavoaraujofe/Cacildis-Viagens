import "./button.css";

function Button(props) {
  return (
    <div>
      <button style={{
        borderRadius: "9px",
        border: "none",
        padding: "20px 30px",
        color: "white",
        backgroundColor: "purple",
        fontWeight: "bold"
        }}>
        {props.content}
        </button>
    </div>
  );
}

export default Button;
