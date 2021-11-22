import FlightCard from "../flight-card/flight-card";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingBar from "../loading-bar/loading";

function FlightList() {
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
        }, 3000);
      } catch (err) {
        console.log(err);
      }
    }

    flightList();
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingBar />
      ) : (
        <div>
          {flights.map((currentElement) => {
            console.log(currentElement.airlines);
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
