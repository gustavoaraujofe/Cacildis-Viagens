function Login(props) {
  return (
    <div
      className={`d-flex justify-content-end mt-1 ${
        props.display === false ? "d-none" : null
      }`}
    >
      <form className="row g-3">
        <div className="col-auto">
          <label htmlFor="staticEmail2" className="visually-hidden">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="staticEmail2"
            placeholder="nome@email.com"
          />
        </div>
        <div className="col-auto">
          <label htmlFor="inputPassword2" className="visually-hidden">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword2"
            placeholder="senha"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-dark mb-3">
            Logar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
