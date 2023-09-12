import React, { useState } from "react";

const formatCells = (personne, semaine, joursSemaine) => {
  return joursSemaine.map((jour, colIndex) => {
    const { amStart, amEnd, pmStart, pmEnd } = personne[semaine][jour];

    if (amStart && amEnd && pmStart && pmEnd) {
      // Si les 4 valeurs sont complétées, affiche tout
      return (
        <td key={colIndex} className="schedule-cell">
          {amStart} - {amEnd}
          <br />
          {pmStart} - {pmEnd}
        </td>
      );
    } else if ((amStart && amEnd) || (pmStart && pmEnd)) {
      // Si 2 seulement sont complétées, affiche les 2 valeurs avec un "-"
      return (
        <td key={colIndex} className="schedule-cell">
          {amStart ? `${amStart} - ${amEnd}` : ""}
          {pmStart ? `${pmStart} - ${pmEnd}` : ""}
        </td>
      );
    } else {
      // Si aucune n'est complétée, affiche "-"
      return (
        <td key={colIndex} className="schedule-cell">
          {"-"}
        </td>
      );
    }
  });
};

const TableDataScheduleWeek = ({ data, week, className }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  if (!data || data.length === 0) {
    return <p>Aucune donnée à afficher.</p>;
  }

  const horaireSemaine = week === 1 ? "semaine1" : "semaine2";
  const joursSemaine = Object.keys(data[0][horaireSemaine]);

  return (
    <div className="table-container">
      <table className={className}>
        <thead>
          <tr>
            <th>
              <input
                type="text"
                placeholder="Rechercher par nom"
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
              />
            </th>
            {joursSemaine.map((jour, index) => (
              <th key={index}>{jour}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data
            .filter((personne) =>
              personne.nom.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((personne, index) => (
              <tr key={index}>
                <td className="personne-nom">{personne.nom}</td>
                {formatCells(personne, horaireSemaine, joursSemaine)}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDataScheduleWeek;
