function Login(props) {
  return (
    <div
      className={`d-flex justify-content-${props.align} mt-1 ${
        props.display === false ? "d-none" : null
      }`}
    >
      <form className="row g-3" onSubmit={props.handleSubmit}>
        <div
          className={`d-flex ${
            props.align === "center" ? "flex-column" : ""
          } align-items-center flex-wrap justify-content-center`}
        >
          <div className="col-auto">
            <label className="visually-hidden">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="nome@email.com"
              value={props.value}
              onChange={props.onChange}
            />
          </div>
          <div className="col-auto m-2">
            <label className="visually-hidden">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Senha"
            />
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-dark m-0"
              style={{ width: "120px" }}
            >
              Logar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
