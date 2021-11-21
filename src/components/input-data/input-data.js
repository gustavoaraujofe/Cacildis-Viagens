import "./input-data.css";

function InputData(props) {
  return (
    <div>
      <div className="">
        <label>
          <input className="input-data" type="text" name="name" value="Data" />
        </label>
      </div>
    </div>
  );
}

export default InputData;