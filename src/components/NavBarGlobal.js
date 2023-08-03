import React from "react";
import TitreLogo from "./TitreLogo";
import NavBar from "./NavBar";
import BoutonConnexion from "./BoutonConnexion";

const NavBarGlobal = () => {
  return (
    <div className="navbar-global">
      <TitreLogo />
      <NavBar />
      <BoutonConnexion />
    </div>
  );
};

export default NavBarGlobal;
