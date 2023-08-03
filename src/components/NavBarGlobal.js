import React from "react";
import TitreEtLogo from "./TitreEtLogo";
import NavBar from "./NavBar";
import BoutonConnexion from "./BoutonConnexion";

const NavBarGlobal = () => {
  return (
    <div className="navbar-global">
      <TitreEtLogo />
      <NavBar />
      <BoutonConnexion />
    </div>
  );
};

export default NavBarGlobal;
