import React, { useState, useEffect } from "react";
import { getWeek } from "date-fns";
import NavBarGlobal from "../../components/navbars/NavBarGlobal";
import NavBarInfosPratiques from "../../components/navbars/NavBarInfosPratiques";
import AnimatedContainer from "../../components/common/AnimatedContainer";
import RadioButtonSelector from "../../components/common/RadioButtonSelector";
import TableDataSchedule from "../../components/pageComponents/horaire/TableDataSchedule";
import TableDataScheduleWeek from "../../components/pageComponents/horaire/TableDataScheduleWeek";

const Horaires = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    const currentWeekNumber = getWeek(currentDate);

    const selectedOption =
      currentWeekNumber % 2 === 1 ? "horaireS1" : "horaireS2";
    setSelectedOption(selectedOption);
  }, []);

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
      nom: "Levaux",
      prenom: "Jonathan",
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
        },
        vendredi: {
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
      nom: "Lemeire",
      prenom: "Elodie",
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
        lundi: {},
        mardi: {
          amStart: "9h",
          amEnd: "13h",
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
          pmEnd: "19h",
        },
      },
    },
  ];

  const horaireSemaine1 = horaire.map((person) => ({
    nom: person.nom,
    prenom: person.prenom,
    semaine1: person.semaine1,
  }));

  // Créez horaireSemaine2 en extrayant les données de la semaine 2 de chaque personne
  const horaireSemaine2 = horaire.map((person) => ({
    nom: person.nom,
    prenom: person.prenom,
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
          <TableDataScheduleWeek
            data={horaireSemaine1}
            week={1}
            className="table-data"
          />
        )}

        {selectedOption === "horaireS2" && (
          <TableDataScheduleWeek
            data={horaireSemaine2}
            week={2}
            className="table-data"
          />
        )}
      </AnimatedContainer>
    </div>
  );
};

export default Horaires;
