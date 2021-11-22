import FlightCard from "../flight-card/flight-card";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingBar from "../loading-bar/loading";
import NavBar from "../navbar/NavBar";
import InputSelect from "../input-select/InputSelect";
import ButtonDark from "../button-dark/button-dark";
import InputData from "../input-data/input-data";
import { Link } from "react-router-dom";

function FlightList(props) {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  function handleChange(event) {
    props.setDadosVoos({
      ...props.dadosVoos,
      [event.target.name]: event.target.value,
    });
  }

  useEffect(() => {
    async function flightList() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/cacildis-viagens-voos-v2"
        );

        let filtred = response.data.filter((currentElement) => {
          return (
            currentElement.departure_airport_code === props.dadosVoos.origem &&
            currentElement.arrival_airport_code === props.dadosVoos.destino
          );
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
  }, [refresh]);


  return (
    <div>
      <NavBar pag="Lista de Voos" backButton="/" />
      {loading ? (
        <LoadingBar />
      ) : (
        <div>
          <div>
            <InputSelect
              label="Origem"
              id="origem"
              name="origem"
              onChange={handleChange}
              value={props.dadosVoos.origem}
            >
              <option value="" disabled>
                Selecione a origem
              </option>
              <option value="GRU">São Paulo - Guarulhos</option>
              <option value="GIG">Rio de Janeiro - Galeão</option>
              <option value="SSA">Salvador</option>
            </InputSelect>

            <InputSelect
              label="Destino"
              id="destino"
              name="destino"
              onChange={handleChange}
              value={props.dadosVoos.destino}
            >
              <option value="" disabled>
                Selecione o destino
              </option>
              <option value="GRU">São Paulo - Guarulhos</option>
              <option value="GIG">Rio de Janeiro - Galeão</option>
              <option value="SSA">Salvador</option>
            </InputSelect>
            <InputData
              label="Ida"
              id="data"
              name="data"
              onChange={handleChange}
              value={props.dadosVoos.data}
            />
            <ButtonDark
              content="Buscar"
              to="/flight-list"
              onClick={() => setRefresh(!refresh)}
            />
          </div>
          {flights.length === 0 ? (
            <p className="text-center mt-5">Voo não encontrado...</p>
          ) : (
            flights.map((currentElement) => {
              return (
                <Link to={`/${currentElement._id}`} key={currentElement._id}>
                  <FlightCard
                    img={currentElement.airlines.split(",")[0]}
                    departure_time={currentElement.departure_time}
                    arrival_time={currentElement.arrival_time}
                    trip_duration={currentElement.trip_duration}
                    departure_airport_code={
                      currentElement.departure_airport_code
                    }
                    arrival_airport_code={currentElement.arrival_airport_code}
                    num_stops={currentElement.num_stops}
                    price={currentElement.price}
                  />
                </Link>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}

export default FlightList;
