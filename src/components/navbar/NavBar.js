import "./NavBar.css";
import { Link } from "react-router-dom";
import LogoTexto from "../logo-texto/logo-texto";
import { FaRegUserCircle } from "react-icons/fa";

function NavBar(props) {
  return (
    <div className={props.opacity}>
      <nav
        className={`navbar navbar-expand-lg navbar-dark ${
          props.pag === "Home" ? "bgColorGrey" : "bgColor"
        }`}
      >
        <div className="container-fluid">
          <Link
            to=""
            className="navbar-brand text-white collapse navbar-collapse m-auto"
            href="#"
          >
            <LogoTexto />
          </Link>
          <div className="navbar-toggler rounded-circle border-0">
            <Link to={props.backButton}>
              <i
                className={` ${
                  props.pag === "Home" ? "opacity-0" : null
                } fa fa-angle-left fa-lg text-white`}
              ></i>
            </Link>
          </div>
          <h2 className="navbar-brand text-white navbar-toggler border-0 mb-0">
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
                className="nav-link text-white"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
              <Link to="reservas" className="nav-link text-white" href="#">
                Minhas Reservas
              </Link>
              <Link to="" className="nav-link text-white" href="#">
                Pricing
              </Link>
              <Link
                to=""
                className="nav-link disabled text-white"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </Link>

              <Link to="">
                <div className="m-1">
                  <FaRegUserCircle style={{ color: "white" }} size={24} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
