import "./NavBar.css";
import { Link } from "react-router-dom";
import LogoTexto from "../logo-texto/logo-texto";
import { FaRegUserCircle } from "react-icons/fa";
import Login from "../login/login";
import { useState } from "react";

function NavBar(props) {
  const [linkLogin, setLinkLogin] = useState(false);

  function displayLogin() {
    setLinkLogin(!linkLogin);
  }

  return (
    <div className={props.opacity}>
      <nav
        className={`navbar navbar-expand-lg navbar-dark ${
          props.pag === "Home" ? "bgColorGrey" : "bgColor"
        }`}
      >
        <div className="container-fluid">
          <div
            to=""
            className={`navbar-brand text-white ${
              props.pag !== "Home" ? "collapse navbar-collapse" : ""
            } `}
            href="#"
          >
            <LogoTexto />
          </div>
          <div className="navbar-toggler rounded-circle border-0">
            <Link to={props.backButton}>
              <i
                className={` ${
                  props.pag === "Home" ? "opacity-0" : null
                } fa fa-angle-left fa-lg text-white`}
              ></i>
            </Link>
          </div>
          <h2
            className={`${
              props.pag === "Home" ? "d-none" : null
            } navbar-brand text-white navbar-toggler border-0 mb-0`}
          >
            {props.pag}
          </h2>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav ">
              <Link
                to="/"
                className="nav-link text-white ms-3"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
              <Link to="/reservas" className="nav-link text-white ms-3" href="#">
                Minhas Reservas
              </Link>
              <Link to="/cadastro" className="nav-link text-white ms-3" href="#">
                Meu Cadastro
              </Link>
              <div className="m-1 ms-3" onClick={() => displayLogin()}>
                <FaRegUserCircle style={{ color: "white" }} size={24} />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="text-end me-3">
        <Login display={linkLogin} align="end" />
      </div>
    </div>
  );
}

export default NavBar;
