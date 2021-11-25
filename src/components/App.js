import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./home/Home";
import "./App.css";
import FlightList from "./flight-list/FlightList";
import ReserveList from "./reserve-list/ReserveList";
import RegistrationPage from "./registration-page/registration-page";
import RegistrationEdit from "./registration-edit/registration-edit";
import PaymentPage from "./PaymentPage/PaymentPage";
import BoardingPass from "./boarding-pass/boarding-pass";
import Footer from "./footer/footer";

function App() {
  const [dadosVoos, setDadosVoos] = useState({
    origem: "",
    destino: "",
    data: "",
    qtdPessoas: 0,
  });

  return (
    <>
      <div className="h-100">
        <Routes>
          <Route
            path="/"
            element={<Home dadosVoos={dadosVoos} setDadosVoos={setDadosVoos} />}
          />
          <Route
            path="/voos"
            element={
              <FlightList
                qtd={dadosVoos.qtdPessoas}
                dadosVoos={dadosVoos}
                setDadosVoos={setDadosVoos}
              />
            }
          />
          <Route path="/cadastro" element={<RegistrationPage />} />
          <Route path="/editar-cadastro" element={<RegistrationEdit />} />
          <Route path="/login" element="" />
          <Route path="/:id" element={<PaymentPage />} />
          <Route
            path="/reservas/:idFlight/:idUser"
            element={<BoardingPass />}
          />
          <Route path="/reservas" element={<ReserveList />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
