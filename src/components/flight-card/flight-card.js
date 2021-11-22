import "./flight-card.css";
import gol from "../../assets/images/gol.jpg";
import latam from "../../assets/images/latam.jpg";
import azul from "../../assets/images/azul.jpg";
import itapemerim from "../../assets/images/itapemerim.jpg";

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
      <img src={img} alt="" />
      <span>{props.departure_time}</span>
      <span>{props.arrival_time}</span>
      <span>{props.trip_duration}</span>
      <span>{props.departure_airport_code}</span>
      <span>{props.arrival_airport_code}</span>
      <p>{props.price}</p>
      <p>{props.num_stops}</p>
    </button>
  );
}

export default FlightCard;
