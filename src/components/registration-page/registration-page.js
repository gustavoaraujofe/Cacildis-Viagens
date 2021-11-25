import "./registration-page.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Form from "../form/form";
import NavBar from "../navbar/NavBar";
import Alert from "../alert/Alert";
import "../container-items.css";

function RegistrationPage() {
  const [userCreated, setUserCreated] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [newRegistration, setNewRegistration] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    genero: "",
    email: "",
    password: "",
    birthDate: "",
    acceptedTerms: false,
    listaVoos: [],
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);
    axios
      .post("https://ironrest.herokuapp.com/cacildis-viagens-users", formData)
      .then(() => {
        setUserCreated(true);
        setIsSending(true);
      })
      .catch((err) => {
        console.log(err);
        setIsSending(true);
      });
  }

  return (
    <div>
      <NavBar pag="Meu Cadastro" backButton="/" />
      {userCreated ? (
        <>
          <Alert type="success">Conta criada com sucesso!</Alert>
          <div className="btn-middle">
            <Link to="/">
              <button className="btn-dark">Voltar para Home</button>
            </Link>
          </div>
        </>
      ) : null}
      <div className="container-items">
        {newRegistration ? (
          <div className="container mt-5" style={{ maxWidth: "800px" }}>
            <div className="w-100 m-auto d-flex justify-content-center">
              <Form
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                formData={formData}
                setFormData={setFormData}
                isSending={isSending}
                textBtn="Cadastrar"
              />
            </div>
          </div>
        ) : (
          <div className="d-flex flex-column justify-content-center mt-4">
            <div className="btn-middle">
              <button
                className="btn-dark"
                onClick={() => setNewRegistration(true)}
              >
                Criar nova conta
              </button>
            </div>
            <div className="btn-middle">
              <Link to="/editar-cadastro">
                <button className="btn-dark">Editar conta</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RegistrationPage;
