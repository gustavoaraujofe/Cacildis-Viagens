import "./registration-page.css";
import { useState } from "react";
import axios from "axios";
import Form from "../form/form";
import NavBar from "../navbar/NavBar";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    genero: "",
    email: "",
    password: "",
    birthDate: "11/01/1965",
  });
  const [isSending, setIsSending] = useState(false);
  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
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
      <NavBar pag="Página de Cadastro" backButton="/" />
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        isSending={isSending}
      />
      <button className="btn-pink" disabled={isSending} type="submit">
        {isSending ? <span role="status" aria-hidden="true"></span> : null}
        Cadastrar
        
      </button>
    </>
  );
}

export default RegistrationPage;
