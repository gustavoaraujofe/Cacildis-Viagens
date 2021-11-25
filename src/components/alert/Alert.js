function Alert(props) {
  return (
    <div
      className={`alert alert-${props.type} d-flex align-items-center`}
      role="alert"
    >
      <div className="m-auto">
        <strong>{props.children}</strong>
      </div>
    </div>
  );
}

export default Alert;
