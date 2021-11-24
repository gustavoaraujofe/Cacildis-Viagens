import NavBar from "../navbar/NavBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./boarding-pass.css";
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
        setUser(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    infoUser();
  }, []);

  return (
    <div>
      <NavBar pag="Boarding Pass" backButton="/reservas" />
      {loading ? null : flights.length === 0 ? (
        <p className="text-center mt-5">Você não possui nenhuma reserva.</p>
      ) : (
        <>
          <div>
            <div className="boarding-pass-container">
              <span className="titulo">Nome do passageiro:</span>
              <span className="titulo"> {user.nome}</span>
              <p>
                <img src={img} alt="" />
              </p>
              <span className="titulo">Data do voo: </span>
              <span>{flights[0].departure_date}</span>
              <div className="dados-passagem">
                <span className="titulo">Saída: </span>
                <span>
                  <ConvertHours value={flights[0].departure_time} decrement={false}/>
                </span>
                <span>{flights[0].departure_airport_code}</span>
              </div>
              <div className="dados-passagem">
                <span className="titulo">Chegada: </span>
                <ConvertHours value={flights[0].arrival_time} />
                <span>{flights[0].arrival_airport_code}</span>
              </div>
              <div className="dados-passagem">
                <span className="titulo">Classe: </span>
                <span>{flights[0].cabin_class}</span>
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
              <div className="qr-code">
                <QRCode value="hey" size={80} />
              </div>
              <div className="dados-passagem ultimo"></div>
              <span className="titulo">Horário de Embarque: </span>
              <ConvertHours value={flights[0].departure_time} decrement={true} />
            </div>
          </div>
          <div className="btn-middle">
            <button className="btn-pink">Imprimir</button>
          </div>
        </>
      )}
    </div>
  );
}

export default BoardingPass;
