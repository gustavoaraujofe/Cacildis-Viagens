
function FormField(props) {
    return (
      <div className="mb-3">
        <label htmlFor={props.id} className="form-label">
          {props.label}
        </label>
        <input
          type={props.type}
          className="w-100 form-control"
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          required={props.required}
          pattern={props.pattern}
        />
      </div>
    );
}
  
export default FormField;