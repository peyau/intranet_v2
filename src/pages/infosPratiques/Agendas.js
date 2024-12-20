import React, { useState } from "react";
import NavBarGlobal from "../../components/navbars/NavBarGlobal";
import NavBarInfosPratiques from "../../components/navbars/NavBarInfosPratiques";
import BigCalendrierRetro from "../../components/calendars/BigCalendrierRetro";
import AnimatedContainer from "../../components/common/AnimatedContainer";
import BigCalendrierVisite from "../../components/calendars/BigCalendrierVisite";
import BigCalendrierProjet from "../../components/calendars/BigCalendrierProjet";
import RadioButtonSelector from "../../components/common/RadioButtonSelector";

const Agendas = () => {
  const [selectedOption, setSelectedOption] = useState("retro");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const options = [
    { value: "retro", label: "Afficher le rétroplanning" },
    { value: "visite", label: "Afficher les visites de classe" },
    { value: "projet", label: "Afficher les projets" },
  ];

  return (
    <div>
      <NavBarGlobal />
      <h1>Rétroplanning</h1>
      <NavBarInfosPratiques />
      <AnimatedContainer containerClass="sub-container">
        <RadioButtonSelector
          options={options}
          selectedOption={selectedOption}
          onChange={handleOptionChange}
        />

        {selectedOption === "retro" && <BigCalendrierRetro />}
        {selectedOption === "visite" && <BigCalendrierVisite />}
        {selectedOption === "projet" && <BigCalendrierProjet />}
      </AnimatedContainer>
    </div>
  );
};

export default Agendas;
