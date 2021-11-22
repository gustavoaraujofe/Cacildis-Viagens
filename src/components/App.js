import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import NavBar from "./navbar/NavBar";
import "./App.css";
import FlightList from './flight-list/FlightList';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="flight-list" element={<FlightList />} />
        <Route path="cadastro" element="" />
        <Route path="editar-cadastro" element="" />
        <Route path="login" element="" />
        <Route path="confirmacao" element="" />
        <Route path="pagamento" element="" />
        <Route path="cartao-embarque" element="" />
        <Route path="reservas" element="" />
      </Routes>
    </div>
  );
}

export default App;

// Insomnia
// collection_voos
// collection_usuarios
