function Alert(props) {
  return (
    <div className={`alert alert-${props.type} d-flex align-items-center`} role="alert">
      <div><strong>{props.children}</strong></div>
    </div>
  );
}

export default Alert;
