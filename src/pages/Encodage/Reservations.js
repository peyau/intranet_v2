import React from "react";
import NavBar from "../../components/Navigation";
import NavBarEncodage from "../../components/NavigationEncodage";

const Reservations = () => {
  return (
    <div>
      <NavBar />
      <h1>Encodage des réservations</h1>
      <NavBarEncodage />
    </div>
  );
};

export default Reservations;
