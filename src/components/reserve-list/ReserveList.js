import { useState, useEffect } from "react";
import FlightCard from "../flight-card/flight-card";
import axios from "axios";
import Loading from "../loading-bar/loading";


let reserveId = ["619b94b521b7950017ceeab1", "619b957d21b7950017ceeab9", "619b957d21b7950017ceeabd", "619b957d21b7950017ceeac3"]

function ReserveList() {
  const [flights, setFlights] = useState([]);
  const [reserveList, setReserveList] = useState([]);
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

  useEffect(() => {
    for(let i = 0; i < reserveId.length; i++){
       const flight = flights.filter((currentElement) => {
            return currentElement._id === reserveId[i];
        })
        setReserveList([...reserveList, flight]);
    }


  },[flights])


  console.log(reserveList);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : reserveList.length === 0 ? (
        <p className="text-center mt-5">Não existe voos em sua lista</p>
      ) : (
        reserveList.map((currentElement) => {
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
        })
      )}
    </div>
  );
}

export default ReserveList;
