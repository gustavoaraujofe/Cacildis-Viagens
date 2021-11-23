import "./registration-page.css";
import { useState } from "react";
import axios from "axios";
import Form from "../form/form";
import NavBar from "../navbar/NavBar";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    nome: "",
    genero: "",
    email: "",
    password: "",
    birthDate: "11/01/1965",
    acceptedTerms: false,
    listaVoos: []
  });
  const [isSending, setIsSending] = useState(false);
  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setIsSending(true);
    axios
      .post("https://ironrest.herokuapp.com/cacildis-viagens-users", formData)
      .then(() => {

        setIsSending(false);
      })
      .catch((err) => {
        console.log(err);
        setIsSending(false);
      });
  }

  return (
    <>
      <NavBar pag="Meu Cadastro" backButton="/" />
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        isSending={isSending}
      />
    </>
  );
}

export default RegistrationPage;
