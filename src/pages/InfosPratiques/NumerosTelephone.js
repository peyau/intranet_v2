import React, { useState } from "react";
import NavBarGlobal from "../../components/navbars/NavBarGlobal";
import NavBarInfosPratiques from "../../components/navbars/NavBarInfosPratiques";
import AnimatedContainer from "../../components/AnimatedContainer";
import TableData from "../../components/TableData";

const NumerosTelephone = () => {
  const [selectedOption, setSelectedOption] = useState("interne");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const dataInterne = [
    { nom: "John Doe", numero: "12345" },
    { nom: "Jane Smith", numero: "67890" },
  ];

  const dataExterne = [
    { nom: "John Doe Ext", numero: "12345" },
    { nom: "Jane Smith Ext", numero: "67890" },
  ];

  return (
    <div>
      <NavBarGlobal />
      <h1>Numéros de téléphone</h1>
      <NavBarInfosPratiques />
      <AnimatedContainer containerClass="sub-container">
        <div className="radio-button-selector">
          <label
            className={selectedOption === "interne" ? "selected" : ""}
            onClick={() => setSelectedOption("interne")}
          >
            <input
              type="radio"
              value="interne"
              checked={selectedOption === "interne"}
              onChange={handleOptionChange}
            />
            Afficher les numéros internes
          </label>
          <label
            className={selectedOption === "externe" ? "selected" : ""}
            onClick={() => setSelectedOption("externe")}
          >
            <input
              type="radio"
              value="externe"
              checked={selectedOption === "externe"}
              onChange={handleOptionChange}
            />
            Afficher les numéros externes
          </label>
        </div>

        {selectedOption === "interne" && <TableData data={dataInterne} />}

        {selectedOption === "externe" && <TableData data={dataExterne} />}
      </AnimatedContainer>
    </div>
  );
};

export default NumerosTelephone;
