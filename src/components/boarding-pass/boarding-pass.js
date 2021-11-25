import NavBar from "../navbar/NavBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./boarding-pass.css";
import "../container-items.css";
import QRCode from "react-qr-code";
import gol from "../../assets/images/gol.jpg";
import latam from "../../assets/images/latam.jpg";
import azul from "../../assets/images/azul.jpg";
import itapemerim from "../../assets/images/itapemerim.jpg";
import ConvertHours from "../ConvertHours/ConvertHours";

function BoardingPass(props) {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState([]);
  const [user, setUser] = useState([]);

  const params = useParams();
  const idFlight = params.idFlight;
  const idUser = params.idUser;

  let img =
    props.img === "Azul"
      ? azul
      : props.img === "Itapemirim"
      ? itapemerim
      : props.img === "LATAM"
      ? latam
      : gol;

  const randomGate = Math.floor(Math.random() * 30);
  const randomSeat = Math.floor(Math.random() * 50);
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const randomCharacter =
    alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase();

  function formatDate(input) {
    const datePart = input.match(/\d+/g);
    const day = datePart[1];
    const month = datePart[0];
    const year = datePart[2].substring(0, 4);
    return day + "/" + month + "/" + year;
  }

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
  }, [idFlight]);

  useEffect(() => {
    if (idUser) {
      async function infoUser() {
        try {
          const response = await axios.get(
            `https://ironrest.herokuapp.com/cacildis-viagens-users/${idUser}`
          );
          setUser(response.data);
        } catch (err) {
          console.error(err);
        }
      }
      infoUser();
    }
  }, [idUser]);

  return (
    <div>
      <NavBar pag="Cartão de embarque" backButton="/reservas" />
      {loading ? null : flights.length === 0 ? (
        <p className="text-center mt-5">Você não possui nenhuma reserva.</p>
      ) : (
        <div>
          <h2 className="text-center h4 mt-5 text-top-pag">
            <strong>Cartão de embarque</strong>
          </h2>
          <div className="container-items">
            <div className="boarding-pass-container">
              <div className="m-auto" style={{ maxWidth: "270px" }}>
                <span className="titulo">Nome do passageiro:</span>
                <span className="titulo"> {user.nome}</span>
                <p>
                  <img className="cia-aerea-img mt-4" src={img} alt="" />
                </p>
                <span className="titulo">Data do voo: </span>
                <span>{formatDate(flights[0].departure_date)}</span>
                <div className="dados-passagem">
                  <span className="titulo me-2">Saída:</span>
                  <ConvertHours
                    value={flights[0].departure_time}
                    decrement={false}
                  />
                  <span>{flights[0].departure_airport_code}</span>
                </div>
                <div className="dados-passagem">
                  <span className="titulo me-2">Chegada: </span>
                  <ConvertHours value={flights[0].arrival_time} />
                  <span>{flights[0].arrival_airport_code}</span>
                </div>
                <div className="dados-passagem">
                  <span className="titulo">Classe: </span>
                  <span>{flights[0].cabin_class.split(",")[0]}</span>
                </div>
                <div className="dados-passagem">
                  <span className="titulo">Portão de Embarque: </span>
                  <span>{randomGate}</span>
                </div>
                <div className="dados-passagem">
                  <span className="titulo">Assento: </span>
                  <span>
                    {randomSeat}
                    {randomCharacter}
                  </span>
                </div>
              </div>
              <div className="qr-code">
                <QRCode value="hey" size={80} />
                <div className="dados-passagem ultimo">
                  <span className="titulo me-2">Horário de Embarque: </span>
                  <ConvertHours
                    value={flights[0].departure_time}
                    decrement={true}
                  />
                </div>
                <div className="mt-4">
                  <button className="btn-pink">Imprimir</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BoardingPass;
