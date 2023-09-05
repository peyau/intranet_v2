import React, { useState } from "react";
import NavBarGlobal from "../../components/navbars/NavBarGlobal";
import NavBarInfosPratiques from "../../components/navbars/NavBarInfosPratiques";
import AnimatedContainer from "../../components/AnimatedContainer";
import TableData from "../../components/TableData";
import RadioButtonSelector from "../../components/RadioButtonSelector";

const NumerosTelephone = () => {
  const [selectedOption, setSelectedOption] = useState("interne");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const options = [
    { value: "interne", label: "Afficher les numéros internes" },
    { value: "externe", label: "Afficher les numéros externes" },
  ];

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
        <RadioButtonSelector
          options={options}
          selectedOption={selectedOption}
          onChange={handleOptionChange}
        />

        {selectedOption === "interne" && (
          <TableData data={dataInterne} className="table-data-small" />
        )}

        {selectedOption === "externe" && (
          <TableData data={dataExterne} className="table-data-small" />
        )}
      </AnimatedContainer>
    </div>
  );
};

export default NumerosTelephone;
