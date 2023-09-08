import React, { useState } from "react";
import NavBarGlobal from "../../components/navbars/NavBarGlobal";
import NavBarInfosPratiques from "../../components/navbars/NavBarInfosPratiques";
import AnimatedContainer from "../../components/AnimatedContainer";
import RadioButtonSelector from "../../components/RadioButtonSelector";
import TableData from "../../components/TableData";
import TableDataSchedule from "../../components/TableDataSchedule";

const Horaires = () => {
  const [selectedOption, setSelectedOption] = useState("retro");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const options = [
    { value: "horaire", label: "Afficher tous les horaires" },
    { value: "horaireS1", label: "Horaires semaine 1" },
    { value: "horaireS2", label: "Horaires semaine 2" },
  ];

  const horaire = [
    {
      nom: "Personne 1",
      semaine1: {
        lundi: {
          amStart: "9h",
          amEnd: "12h",
          pmStart: "12h",
          pmEnd: "17h",
        },
        mardi: {
          amStart: "9h",
          amEnd: "12h",
          pmStart: "13h",
          pmEnd: "17h",
        },
        mercredi: {
          amStart: "9h",
          amEnd: "12h",
          pmStart: "13h",
          pmEnd: "17h",
        },
        jeudi: {
          amStart: "9h",
          amEnd: "12h",
          pmStart: "13h",
          pmEnd: "17h",
        },
        vendredi: {
          amStart: "9h",
          amEnd: "12h",
          pmStart: "13h",
          pmEnd: "17h",
        },
        samedi: {
          amStart: "9h",
          amEnd: "12h",
          pmStart: "13h",
          pmEnd: "17h",
        },
      },
      semaine2: {
        lundi: {
          amStart: "9h",
          amEnd: "12h",
          pmStart: "13h",
          pmEnd: "17h",
        },
        mardi: {
          amStart: "9h",
          amEnd: "12h",
          pmStart: "13h",
          pmEnd: "17h",
        },
        mercredi: {
          amStart: "9h",
          amEnd: "12h",
          pmStart: "13h",
          pmEnd: "17h",
        },
        jeudi: {
          amStart: "9h",
          amEnd: "12h",
          pmStart: "13h",
          pmEnd: "17h",
        },
        vendredi: {
          amStart: "9h",
          amEnd: "12h",
          pmStart: "13h",
          pmEnd: "17h",
        },
        samedi: {
          amStart: "9h",
          amEnd: "12h",
          pmStart: "13h",
          pmEnd: "17h",
        },
      },
    },
    {
      nom: "Personne 2",
      semaine1: {
        lundi: {
          amStart: "9h",
          amEnd: "12h",
          pmStart: "12h",
          pmEnd: "17h",
        },
        mardi: {
          amStart: "9h",
          amEnd: "12h",
          pmStart: "13h",
          pmEnd: "17h",
        },
        mercredi: {
          amStart: "9h",
          amEnd: "12h",
          pmStart: "13h",
          pmEnd: "17h",
        },
        jeudi: {
          amStart: "9h",
          amEnd: "12h",
          pmStart: "13h",
          pmEnd: "17h",
        },
        vendredi: {
          amStart: "9h",
          amEnd: "12h",
          pmStart: "13h",
          pmEnd: "17h",
        },
        samedi: {
          amStart: "9h",
          amEnd: "12h",
          pmStart: "13h",
          pmEnd: "17h",
        },
      },
      semaine2: {
        lundi: {
          amStart: "9h",
          amEnd: "12h",
          pmStart: "13h",
          pmEnd: "17h",
        },
        mardi: {
          amStart: "9h",
          amEnd: "12h",
          pmStart: "13h",
          pmEnd: "17h",
        },
        mercredi: {
          amStart: "9h",
          amEnd: "12h",
          pmStart: "13h",
          pmEnd: "17h",
        },
        jeudi: {
          amStart: "9h",
          amEnd: "12h",
          pmStart: "13h",
          pmEnd: "17h",
        },
        vendredi: {
          amStart: "9h",
          amEnd: "12h",
          pmStart: "13h",
          pmEnd: "17h",
        },
        samedi: {
          amStart: "9h",
          amEnd: "12h",
          pmStart: "13h",
          pmEnd: "17h",
        },
      },
    },
  ];

  const horaireSemaine1 = horaire.map((person) => ({
    nom: person.nom,
    semaine1: person.semaine1,
  }));

  // Créez horaireSemaine2 en extrayant les données de la semaine 2 de chaque personne
  const horaireSemaine2 = horaire.map((person) => ({
    nom: person.nom,
    semaine2: person.semaine2,
  }));

  return (
    <div>
      <NavBarGlobal />
      <h1>Horaire de l'équipe</h1>
      <NavBarInfosPratiques />
      <AnimatedContainer containerClass="sub-container">
        <h2>L'horaire de l'équipe</h2>
        <RadioButtonSelector
          options={options}
          selectedOption={selectedOption}
          onChange={handleOptionChange}
        />

        {selectedOption === "horaire" && (
          <TableDataSchedule data={horaire} className="table-data-schedule" />
        )}

        {selectedOption === "horaireS1" && (
          <TableData data={horaireSemaine1} className="table-data" />
        )}

        {selectedOption === "horaireS2" && (
          <TableData data={horaireSemaine2} className="table-data" />
        )}
      </AnimatedContainer>
    </div>
  );
};

export default Horaires;
