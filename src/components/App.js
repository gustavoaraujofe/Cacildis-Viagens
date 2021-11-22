import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import {useState} from "react"
import Home from "./home/Home";
import "./App.css";
import FlightList from "./flight-list/FlightList";
import RegistrationPage from "../components/registration-page/registration-page";
import ReserveList from "./reserve-list/ReserveList";

function App() {
  const [login, setLogin] = useState(false);
  const [dadosVoos, setDadosVoos] = useState({
    origem: "",
    destino: "",
    data: "",
    qtdPessoas: 0,
  });
  const [passagens, setPassagens] = useState([])

  console.log(dadosVoos);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home dadosVoos={dadosVoos} setDadosVoos={setDadosVoos} />} />
        <Route path="flight-list" element={<FlightList dadosVoos={dadosVoos} setDadosVoos={setDadosVoos}/>} />
        <Route path="cadastro" element={<RegistrationPage />} />
        <Route path="editar-cadastro" element="" />
        <Route path="login" element="" />
        <Route path="confirmacao" element="" />
        <Route path="pagamento" element="" />
        <Route path="cartao-embarque" element="" />
        <Route path="reservas" element={<ReserveList />} />
      </Routes>
    </div>
  );
}

export default App;

// Insomnia
// collection_voos
// collection_usuarios
