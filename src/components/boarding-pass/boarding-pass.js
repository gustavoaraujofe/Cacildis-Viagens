import React from "react";
import QRCode from "react-qr-code";
import NavBar from "../navbar/NavBar";
import FlightCard from "../flight-card/flight-card";
import {useParams} from "react-router-dom"

function BoardingPass() {
const params = useParams()
const idFlight = params.id.split('&')[0]
const idUser = params.id.split('&')[1] 



  return (
    <>
      <NavBar backButton="/" pag="Boarding Pass" />
      <FlightCard />
      Nome do passageiro:
      
      <QRCode value="hey" size={50} />
    </>
  );
}

export default BoardingPass;
