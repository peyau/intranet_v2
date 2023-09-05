import React, { useState } from "react";
import NavBarGlobal from "../../components/navbars/NavBarGlobal";
import NavBarInfosPratiques from "../../components/navbars/NavBarInfosPratiques";
import BigCalendrierRetro from "../../components/calendriers/BigCalendrierRetro";
import AnimatedContainer from "../../components/AnimatedContainer";
import BigCalendrierVisite from "../../components/calendriers/BigCalendrierVisite";
import BigCalendrierProjet from "../../components/calendriers/BigCalendrierProjet";

const Retroplanning = () => {
    const [selectedOption, setSelectedOption] = useState("retro");
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
    
  return (
    <div>
      <NavBarGlobal />
      <h1>Rétroplanning</h1>
      <NavBarInfosPratiques />
      <AnimatedContainer containerClass="sub-container">
      <div className="radio-button-selector">
          <label
            className={selectedOption === "retro" ? "selected" : ""}
            onClick={() => setSelectedOption("retro")}
          >
            <input
              type="radio"
              value="retro"
              checked={selectedOption === "retro"}
              onChange={handleOptionChange}
            />
            Rétroplanning
          </label>
          <label
            className={selectedOption === "visite" ? "selected" : ""}
            onClick={() => setSelectedOption("visite")}
          >
            <input
              type="radio"
              value="visite"
              checked={selectedOption === "visite"}
              onChange={handleOptionChange}
            />
            Visite de classe
          </label>
          <label
            className={selectedOption === "projet" ? "selected" : ""}
            onClick={() => setSelectedOption("projet")}
          >
            <input
              type="radio"
              value="projet"
              checked={selectedOption === "projet"}
              onChange={handleOptionChange}
            />
            Projet
          </label>
        </div>

        {selectedOption === "retro" && (
           <BigCalendrierRetro />
        )}
        {selectedOption === "visite" && (
           <BigCalendrierVisite />
        )}
        {selectedOption === "projet" && (
           <BigCalendrierProjet />
        )}
       
      </AnimatedContainer>
    </div>
  );
};

export default Retroplanning;
