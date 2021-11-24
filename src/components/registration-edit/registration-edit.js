import "./registration-edit.css";
import "../button-dark/button-dark.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Form from "../form/form";
import NavBar from "../navbar/NavBar";
import Login from "../login/login";
import Alert from "../alert/Alert";

function RegistrationEdit() {
  const [userEmail, setUserEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [email, setEmail] = useState("");
  const [registeredUser, setRegisteredUser] = useState("");
  const [userId, setUserId] = useState("");
  const [userChanged, setUserChanged] = useState(false);
  const [userDeleted, setUserDeleted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    genero: "",
    email: "",
    password: "",
    birthDate: "",
    acceptedTerms: false,
    listaVoos: [],
  });

  function handleChangeLogin(event) {
    setEmail(event.target.value);
  }

  function handleSubmitLogin(event) {
    event.preventDefault();
    setUserEmail(email);
  }

  function deleteCount() {
    async function deleteUser() {
      try {
        axios.delete(
          `https://ironrest.herokuapp.com/cacildis-viagens-users/${userId}`
        );
        setUserDeleted(true);
      } catch (err) {
        console.error(err);
      }
    }
    deleteUser();
  }

  useEffect(() => {
    async function infoUser() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/cacildis-viagens-users"
        );

        if (userEmail.length > 0) {
          let filtred = response.data.filter((currentElement) => {
            return currentElement.email === userEmail;
          });

          if (filtred.length) {
            setRegisteredUser("registred");
            setUserId(filtred[0]._id);
            delete filtred[0]._id;
            setFormData({ ...filtred[0] });
          } else {
            setRegisteredUser("noregistred");
          }
        }
      } catch (err) {
        console.error(err);
      }
    }
    infoUser();
  }, [userEmail]);

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);
    axios
      .put(
        `https://ironrest.herokuapp.com/cacildis-viagens-users/${userId}`,
        formData
      )
      .then(() => {
        setUserChanged(true);
        setIsSending(false);
      })
      .catch((err) => {
        console.log(err);
        setIsSending(false);
      });
  }

  return (
    <div className="h-100">
      <NavBar pag="Editar Cadastro" backButton="/cadastro" />
      {userEmail === "" ? (
        <div className=" mt-3 container">
          <Login
            onChange={handleChangeLogin}
            handleSubmit={handleSubmitLogin}
            align="center"
          />
        </div>
      ) : userDeleted ? (
        <>
          <Alert type="danger">Conta excluída com sucesso!</Alert>
          <div className="btn-middle">
            <Link to="/">
              <button className="btn-dark">Voltar para Home</button>
            </Link>
          </div>
        </>
      ) : userChanged ? (
        <>
          <Alert type="success">Alterações realizadas com sucesso!</Alert>
          <div className="btn-middle">
            <Link to="/">
              <button className="btn-dark">Voltar para Home</button>
            </Link>
          </div>
        </>
      ) : registeredUser === "registred" ? (
        <>
          <div className="container">
            <Form
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              formData={formData}
              setFormData={setFormData}
              isSending={isSending}
              textBtn="Confirmar Alteração"
            />
          </div>
          <div className="btn-middle">
            <button className="btn-dark" onClick={() => deleteCount()}>
              Excluir Conta
            </button>
          </div>
        </>
      ) : registeredUser === "noregistred" ? (
        <>
          <Alert type="warning">Usuário não encontrado!</Alert>
          <div className=" mt-3 container">
            <Login
              onChange={handleChangeLogin}
              handleSubmit={handleSubmitLogin}
              align="center"
            />
          </div>
          <div className="btn-middle">
            <Link to="/cadastro">
              <button className="btn-dark">Criar novo cadastro</button>
            </Link>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default RegistrationEdit;
