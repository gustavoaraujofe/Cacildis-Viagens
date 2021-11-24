import Timer from "../timer-reservation/timer-reservation";
import NavBar from "../navbar/NavBar";
import FlightCard from "../flight-card/flight-card";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CreditCardInput from "react-credit-card-input";
import Login from "../login/login";
import "./PaymentPage.css";
import "../button-pink/button-pink";
import Alert from "../alert/Alert";

function FlightConfirmation() {
  const params = useParams();
  const flightId = params.id.split("&")[0];
  const qtdPass = params.id.split("&")[1];

  const [userEmail, setUserEmail] = useState("");
  const [registeredUser, setRegisteredUser] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPayment, setConfirmPayment] = useState(false);
  const [userId, setUserId] = useState("");
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState([]);
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

  function addIdVoo() {
    if (!formData.listaVoos.includes(flightId)) {
      setFormData({
        ...formData,
        listaVoos: [...formData.listaVoos, flightId],
      });
      setConfirmPayment(true);
    } else {
      alert("Esse voo já foi existe em sua lista");
    }
  }

  useEffect(() => {
    if (formData.nome !== "") {
      axios
        .put(
          `https://ironrest.herokuapp.com/cacildis-viagens-users/${userId}`,
          formData
        )
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
    }
  }, [formData, userId]);

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

  useEffect(() => {
    async function flightList() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/cacildis-viagens-voos-v2"
        );
        let filtred = response.data.filter((flights) => {
          return flights._id === flightId;
        });
        setFlights(filtred);
      } catch (err) {
        console.log(err);
      }
    }
    flightList();
  }, [flightId]);

  return (
    <div>
      <NavBar pag="Pagamento" backButton="/" />
      {flights.length === 0 ? (
        <p className="text-center mt-5">Não existe voos para confirmar</p>
      ) : userEmail === "" ? (
        <div className=" mt-3 container">
          <Login
            onChange={handleChangeLogin}
            handleSubmit={handleSubmitLogin}
            align="center"
          />
        </div>
      ) : registeredUser === "registred" ? (
        confirmPayment ? (
          <>
            <Alert type="success">Pagamento realizado com sucesso!</Alert>
            <div className="btn-middle">
              <Link to="/reservas">
                <button className="btn-dark">Minhas reservas</button>
              </Link>
            </div>
          </>
        ) : (
          <div className="container-pagamento">
            <Timer />
            <p className="texto-pagamento">Garanta já o seu voo!</p>
            <p>A oferta abaixo ficará disponível por apenas
            30 minutos.</p>
            <FlightCard
              key={flights[0]._id}
              img={flights[0].airlines.split(",")[0]}
              departure_time={flights[0].departure_time}
              arrival_time={flights[0].arrival_time}
              trip_duration={flights[0].trip_duration}
              departure_airport_code={flights[0].departure_airport_code}
              arrival_airport_code={flights[0].arrival_airport_code}
              num_stops={flights[0].num_stops}
              price={flights[0].price}
              qtd={qtdPass}
            />
            <div>
            <p>Insira os dados do cartão de crédito:</p>
              <CreditCardInput
                onError={({ inputName, err }) =>
                  console.log(`credit card input error: ${err}`)
                }
                cardCVCInputProps={{
                  onBlur: (e) => console.log("cvc blur", e),
                  onChange: (e) => console.log("cvc change", e),
                  onError: (err) => console.log(`cvc error: ${err}`),
                }}
                cardExpiryInputProps={{
                  onBlur: (e) => console.log("expiry blur", e),
                  onChange: (e) => console.log("expiry change", e),
                  onError: (err) => console.log(`expiry error: ${err}`),
                }}
                cardNumberInputProps={{
                  onBlur: (e) => console.log("number blur", e),
                  onChange: (e) => console.log("number change", e),
                  onError: (err) => console.log(`number error: ${err}`),
                }}
                customTextLabels={{
                  invalidCardNumber: "O número do cartão está inválido.",
                  expiryError: {
                    invalidExpiryDate: "A data de expiração está inválida.",
                    monthOutOfRange:
                      "O mês de expiração deve ser um número entre 1 e 12.",
                    yearOutOfRange:
                      "O ano de expiração não pode ser inferior ao atual.",
                    dateOutOfRange:
                      "A data de expiração não pode ser inferior à atual.",
                  },
                  invalidCvc: "O código de segurança está inválido.",
                  invalidZipCode: "O CEP está inválido.",
                  cardNumberPlaceholder: "Número do cartão",
                  expiryPlaceholder: "MM/AA",
                  cvcPlaceholder: "CVC",
                  zipPlaceholder: "CEP",
                }}
              />
            </div>
            <div className="btn-pagamento">
              <button className="btn-pink" onClick={() => addIdVoo()}>
                Fazer o Pagamento
              </button>
            </div>
          </div>
        )
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
          <div className="">
            <Link to="/cadastro">
              <button className="btn-dark">Criar novo cadastro</button>
            </Link>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default FlightConfirmation;
