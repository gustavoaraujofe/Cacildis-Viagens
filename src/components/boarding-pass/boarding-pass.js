import React from "react";
import QRCode from "react-qr-code";
import NavBar from "../navbar/NavBar";
import FlightCard from "../flight-card/flight-card";

function BoardingPass() {
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
