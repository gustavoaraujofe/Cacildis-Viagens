import NavBar from "../navbar/NavBar";
import FlightCard from "../flight-card/flight-card";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./boarding-pass.css";

function BoardingPass() {
  const flightId = useParams();
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState([]);

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
      <NavBar pag="Boarding Pass" backButton="/reservas" />
      {loading ? null : flights.length === 0 ? (
        <p className="text-center mt-5">Não existe voos para confirmar</p>
      ) : (
        <div>
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
          <div></div>
          <button className="btn-pink">Fazer o Pagamento</button>
        </div>
      )}
    </div>
  );
}

export default BoardingPass;
