import { useState, useEffect } from "react";
import FlightCard from "../flight-card/flight-card";
import axios from "axios";
import NavBar from "../navbar/NavBar";
import Login from "../login/login";
import { Link } from "react-router-dom";
import "../button-pink/button-pink.css";
import Alert from "../alert/Alert";

function ReserveList() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reserveList, setReserveList] = useState([]);
  const [user, setUser] = useState([]);
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [alert, setAlert] = useState(false);

  function handleChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setUserEmail(email);
  }

  function deletePass(id) {
    let index = user.listaVoos.indexOf(id);
    user.listaVoos.splice(index, 1);
    setUser({ ...user, listaVoos: [...user.listaVoos] });
    setAlert(true);
  }

  function confirmDelete() {
    setAlert(false);
    axios
      .put(
        `https://ironrest.herokuapp.com/cacildis-viagens-users/${userId}`,
        user
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    async function infoUser() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/cacildis-viagens-users"
        );

        if (userEmail.length > 0) {
          let filtered = response.data.filter((currentElement) => {
            return currentElement.email === userEmail;
          });

          if (filtered.length) {
            setUserId(filtered[0]._id);
            delete filtered[0]._id;
            setUser(filtered[0]);
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
      {alert ? (
        <>
          <Alert type="success">Passagem cancelada com sucesso!</Alert>
          <div className="btn-middle">
            <button className="btn-dark" onClick={() => confirmDelete()}>
              Ok
            </button>
          </div>
        </>
      ) : null}
      {userEmail === "" ? (
        <div className=" mt-3 container">
          <Login
            onChange={handleChange}
            handleSubmit={handleSubmit}
            align="center"
          />
        </div>
      ) : loading ? null : reserveList.length === 0 ? (
        <p className="text-center mt-5">Você não possui nenhuma reserva.</p>
      ) : (
        reserveList.map((currentElement) => {
          return (
            <div key={currentElement._id}>
              <Link to={`${currentElement._id}/${userId}`}>
                <FlightCard
                  img={currentElement.airlines.split(",")[0]}
                  departure_time={currentElement.departure_time}
                  arrival_time={currentElement.arrival_time}
                  trip_duration={currentElement.trip_duration}
                  departure_airport_code={currentElement.departure_airport_code}
                  arrival_airport_code={currentElement.arrival_airport_code}
                  num_stops={currentElement.num_stops}
                ></FlightCard>
              </Link>
              <div className="btn-middle">
                <button
                  className="btn-pink bg-danger"
                  onClick={() => deletePass(currentElement._id)}
                >
                  Cancelar passagem
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default ReserveList;
