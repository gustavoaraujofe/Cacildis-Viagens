import Timer from "../timer-reservation/timer-reservation";
import NavBar from "../navbar/NavBar";

function FlightConfirmation() {
  return (
       
    <div>
      <>
        <NavBar pag="Confirmação" backButton="/" />
        <Timer />
        <button className="btn-pink">Fazer o Pagamento</button>
      </>
    </div>
  );
}

export default FlightConfirmation;
