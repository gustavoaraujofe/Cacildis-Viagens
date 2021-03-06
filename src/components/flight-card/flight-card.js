import "./flight-card.css";
import gol from "../../assets/images/gol.jpg";
import latam from "../../assets/images/latam.jpg";
import azul from "../../assets/images/azul.jpg";
import itapemerim from "../../assets/images/itapemerim.jpg";
import DolarReal from "../DolarReal/DolarReal";
import ConvertHours from "../ConvertHours/ConvertHours";
import { FaPlane } from "react-icons/fa";

function FlightCard(props) {
  let img =
    props.img === "Azul"
      ? azul
      : props.img === "Itapemirim"
      ? itapemerim
      : props.img === "LATAM"
      ? latam
      : gol;

  return (
    <button className="btn-light">
      <p>
        <img className="img-cia-aerea" src={img} alt="Companhia Aerea" />
      </p>
      <div className="info-voo">
        <div className="horario-voo">
          <span className="horario">
            <ConvertHours value={props.departure_time} />
          </span>
          <span className="aeroporto">{props.departure_airport_code}</span>
        </div>
        <div className="duracao-voo">
          <span>{props.trip_duration}</span>
          <span>
            ------------------------
            <FaPlane size={20} />
          </span>
          <p>
            {props.num_stops === 0 ? "direto" : `${props.num_stops} paradas`}
          </p>
        </div>
        <div className="horario-voo">
          <span className="horario">
            <ConvertHours value={props.arrival_time} />
          </span>
          <span className="aeroporto">{props.arrival_airport_code}</span>
        </div>
      </div>

      {props.price ? (
        <p className="preco">
          <DolarReal value={props.price} />
        </p>
      ) : null}
      {props.qtd ? (
        <p>
          {props.qtd} {props.qtd > 1 ? "Passageiros" : "Passageiro"}
        </p>
      ) : null}
    </button>
  );
}

export default FlightCard;
