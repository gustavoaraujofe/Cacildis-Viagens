import Timer from "../timer-reservation/timer-reservation";
import NavBar from "../navbar/NavBar";
import FlightCard from "../flight-card/flight-card";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

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
        }, 2000);
      } catch (err) {
        console.log(err);
      }
    }
    flightList();
  }, []);

  return (
    <div>
      <NavBar pag="Confirmação" backButton="/" />
      <Timer />
      <FlightCard
        key={flights._id}
        img={flights.airlines.split(",")[0]}
        departure_time={flights.departure_time}
        arrival_time={flights.arrival_time}
        trip_duration={flights.trip_duration}
        departure_airport_code={flights.departure_airport_code}
        arrival_airport_code={flights.arrival_airport_code}
        num_stops={flights.num_stops}
        price={flights.price}
      />
      <button className="btn-pink">Fazer o Pagamento</button>
    </div>
  );
}

export default FlightConfirmation;
