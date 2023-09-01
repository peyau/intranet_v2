import React from "react";
import NavBarGlobal from "../../components/navbars/NavBarGlobal";
import NavBarInfosPratiques from "../../components/navbars/NavBarInfosPratiques";

const InfosPratiques = () => {
  return (
    <div>
      <NavBarGlobal />
      <h1>Infos pratiques</h1>
      <NavBarInfosPratiques />
    </div>
  );
};

export default InfosPratiques;
