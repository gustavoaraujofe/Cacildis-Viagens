function Login(props) {
  return (
    <div className="">
      <div
        className={`d-flex justify-content-${props.align} mt-1 ${
          props.display === false ? "d-none" : null
        }`}
      >
        <form
          className="d-flex justify-content-center flex-direction: row"
          onSubmit={props.handleSubmit}
        >
          <div className="col-auto mt-3">
            <label className="visually-hidden">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="nome@email.com"
              value={props.value}
              onChange={props.onChange}
            />
          </div>
          <div className="col-auto m-3">
            <label className="visually-hidden">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Senha"
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-dark mb-3">
              Logar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
