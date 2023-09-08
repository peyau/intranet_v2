import React from "react";

const formatCells = (personne, semaine, joursSemaine) => {
  return joursSemaine.map((jour, colIndex) => {
    const { amStart, amEnd, pmStart, pmEnd } = personne[semaine][jour];

    if (amStart && amEnd && pmStart && pmEnd) {
      // Si les 4 valeurs sont complétées, affiche tout
      return (
        <td key={colIndex} className="schedule-cell">
          {`${amStart} - ${amEnd}\n${pmStart} - ${pmEnd}`}
        </td>
      );
    } else if ((amStart && amEnd) || (pmStart && pmEnd)) {
      // Si 2 seulement sont complétées, affiche les 2 valeurs avec un "-"
      return (
        <td key={colIndex} className="schedule-cell">
          {`${amStart ? amStart + " - " + amEnd : ""}${
            amStart && pmStart ? "\n" : ""
          }${pmStart ? pmStart + " - " + pmEnd : ""}`}
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

const TableDataSchedule = ({ data, className }) => {
  if (!data || data.length === 0) {
    return <p>Aucune donnée à afficher.</p>;
  }

  const joursSemaine = Object.keys(data[0].semaine1);

  return (
    <table className={className}>
      <thead>
        <tr>
          <th></th>
          {joursSemaine.map((jour, index) => (
            <th key={index}>{jour}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((personne, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <tr>
              <td className="personne-nom">{personne.nom}</td>
            </tr>
            <tr className="semaine1">
              <td className="week-cell">Sem 1</td>
              {formatCells(personne, "semaine1", joursSemaine)}
            </tr>

            <tr className="semaine2">
              <td className="week-cell">Sem 2</td>
              {formatCells(personne, "semaine2", joursSemaine)}
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default TableDataSchedule;
