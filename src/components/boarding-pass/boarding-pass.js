import NavBar from "../navbar/NavBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./boarding-pass.css";
import QRCode from "react-qr-code";

function BoardingPass() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState([]);
  const [user, setUser] = useState([]);

  const params = useParams();
  const idFlight = params.idFlight;
  const idUser = params.idUser;
  console.log(idFlight)


  useEffect(() => {
    async function flightList() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/cacildis-viagens-voos-v2"
        );
        let filtred = response.data.filter((flights) => {
          return flights._id === idFlight;
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

  useEffect(() => {
    async function infoUser() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/cacildis-viagens-users/${idUser}`
        );
        setUser(response.data)
        } catch (err) {
        console.error(err);
      }
    }
    infoUser();
  }, []);
  console.log(user)

  return (
    <div>
      <NavBar pag="Boarding Pass" backButton="/reservas" />
      {loading ? null : flights.length === 0 ? (
        <p className="text-center mt-5">Você não possui nenhuma reserva.</p>
      ) : (
        <div>
          <div className="boarding-pass-container">
            <p>{user.nome}</p>
            <span>{flights[0].departure_time}</span>
            <span>{flights[0].departure_airport_code}</span>
            <span>{flights[0].arrival_time}</span>
            <span>{flights[0].arrival_airport_code}</span>
            <p>{flights[0].airlines.split(",")[0]}</p>
            <QRCode value="hey" size={80} />
          </div>
          <div className="btn-middle">
            <button className="btn-pink">Imprimir</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BoardingPass;
