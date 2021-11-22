import FlightCard from "../flight-card/flight-card";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingBar from "../loading-bar/loading";
import NavBar from "../navbar/NavBar";

function FlightList(props) {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function flightList() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/cacildis-viagens-voos-v2"
        );
        setFlights([...response.data]);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (err) {
        console.log(err);
      }
    }

    flightList();
  }, []);

 // flights.filter(() => {
 //  return 
//})


  return (
    <div>
      <NavBar pag="Lista de Voos" backButton="/"/>
      {loading ? (
        <LoadingBar />
      ) : (
        <div>
          {flights.map((currentElement) => {
            return (
              <FlightCard
                key={currentElement._id}
                img={currentElement.airlines.split(",")[0]}
                departure_time={currentElement.departure_time}
                arrival_time={currentElement.arrival_time}
                trip_duration={currentElement.trip_duration}
                departure_airport_code={currentElement.departure_airport_code}
                arrival_airport_code={currentElement.arrival_airport_code}
                num_stops={currentElement.num_stops}
                price={currentElement.price}
              />
            );
          })}
          <FlightCard img="latam" />
        </div>
      )}
    </div>
  );
}

export default FlightList;
