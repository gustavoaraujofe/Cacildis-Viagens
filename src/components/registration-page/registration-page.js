import "./registration-page.css";
import { useState } from "react";
import axios from "axios";
import Form from "../form/form";
import ButtonPink from "../button-pink/button-pink";
import NavBar from "../navbar/NavBar";

function RegistrationPage(props) {
  const [formData, setFormData] = useState({
    genero: "",
    email: "",
    password: "",
    birthDate: "11/01/1965",
    acceptedTerms: false,
  });
  const [isSending, setIsSending] = useState(false);

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.acceptedTerms) {
      alert("Você precisa aceitar os Termos e Condições antes de continuar.");
      return;
    }

    setIsSending(true);

    axios
      .post("https://ironrest.herokuapp.com/cacildis-viagens-voos-v2", formData)
      .then((response) => {
        console.log(response);
        setIsSending(false);
      })
      .catch((err) => {
        console.log(err);
        setIsSending(false);
      });
  }

  return (
    <>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        isSending={isSending}
      />
      <NavBar pag="Página de Cadastro" backButton="/" />
      <Form />
      <ButtonPink />
    </>
  );
}

export default RegistrationPage;
