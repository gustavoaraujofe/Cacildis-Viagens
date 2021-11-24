import { useState, useEffect } from "react";
import FlightCard from "../flight-card/flight-card";
import axios from "axios";
import Loading from "../loading-bar/loading";
import NavBar from "../navbar/NavBar";
import Login from "../login/login";
import { Link } from "react-router-dom";

function ReserveList() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reserveList, setReserveList] = useState([]);
  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [userEmail, setUserEmail] = useState("");

  function handleChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setUserEmail(email);
  }

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
            setUser(filtred[0]);
          } else {
            alert("Usuário não cadastrado");
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

        setFlights([...response.data]);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (err) {
        console.log(err);
      }
    }

    flightList();
  }, []);

  useEffect(() => {
    let list = [];
    if (user.listaVoos !== undefined) {
      for (let i = 0; i < user.listaVoos.length; i++) {
        flights.forEach((currentElement) => {
          if (currentElement._id === user.listaVoos[i]) {
            list.push(currentElement);
          }
        });
      }
      setReserveList(list);
    }
  }, [user, flights]);

  return (
    <div className="h-100">
      <NavBar pag="Minhas Reservas" backButton="/" />
      {userEmail === "" ? (
        <div className=" mt-3 container">
          <Login
            onChange={handleChange}
            handleSubmit={handleSubmit}
            align="center"
          />
        </div>
      ) : loading ? null : reserveList.length === 0 ? (
        <p className="text-center mt-5">Não existem voos em sua lista</p>
      ) : (
        reserveList.map((currentElement) => {
          return (
            <Link to={`${currentElement._id}/${user._id}`}>
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
            </Link>
          );
        })
      )}
    </div>
  );
}

export default ReserveList;
