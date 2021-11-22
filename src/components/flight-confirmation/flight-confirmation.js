import Timer from "../timer-reservation/timer-reservation";
import NavBar from "../navbar/NavBar";
import FlightCard from "../flight-card/flight-card";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CreditCardInput from "react-credit-card-input";

function FlightConfirmation() {
  const flightId = useParams();
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState([]);

  console.log(flightId.id);

  useEffect(() => {
    async function flightList() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/cacildis-viagens-voos-v2"
        );
        let filtred = response.data.filter((flights) => {
          return flights._id === flightId.id;
        });
        setFlights(filtred);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (err) {
        console.log(err);
      }
    }
    flightList();
  }, []);

  return (
    <div>
      <NavBar pag="Confirmação" backButton="/" />
      {loading ? null : flights.length === 0 ? (
        <p className="text-center mt-5">Não existe voos para confirmar</p>
      ) : (
        <div>
          <Timer />
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
          />
          <div>
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
          <button className="btn-pink">Fazer o Pagamento</button>
        </div>
      )}
    </div>
  );
}

export default FlightConfirmation;