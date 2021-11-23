import NavBar from "../navbar/NavBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./boarding-pass.css";
import QRCode from "react-qr-code";

function BoardingPass() {
  const flightId = useParams();
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState([]);
  const [user, setUser] = useState([]);

  const params = useParams();
  const idFlight = params.id.split("&")[0];
  const idUser = params.id.split("&")[1];
  

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

  // useEffect(() => {
  //   async function infoUser() {
  //     try {
  //       const response = await axios.get(
  //         "https://ironrest.herokuapp.com/cacildis-viagens-users"
  //       );
  //       if (userEmail.length > 0) {
  //         let filtred = response.data.filter((currentElement) => {
  //           return currentElement.email === userEmail;
  //         });
  //         if (filtred.length) {
  //           setUser(filtred[0].listaVoos);
  //         } else {
  //           alert("Usuário não cadastrado");
  //         }
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  //   infoUser();
  // }, [userEmail]);

  return (
    <div>
      <NavBar pag="Boarding Pass" backButton="/reservas" />
      {loading ? null : flights.length === 0 ? (
        <p className="text-center mt-5">Não existe voos para confirmar</p>
      ) : (
        <div>
          <div className="boarding-pass-container">
            <span>{flights[0].departure_time}</span>
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
