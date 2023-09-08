import React from "react";

const formatCells = (personne, horaireSemaine, joursSemaine) => {
  return joursSemaine.map((jour) => {
    const { amStart, amEnd, pmStart, pmEnd } = personne[horaireSemaine][jour];

    if (amStart && amEnd && pmStart && pmEnd) {
      // Si les 4 valeurs sont complétées, affiche tout
      return (
        <td key={jour} className="schedule-cell">
          {`${amStart} - ${amEnd}\n${pmStart} - ${pmEnd}`}
        </td>
      );
    } else if ((amStart && amEnd) || (pmStart && pmEnd)) {
      // Si 2 seulement sont complétées, affiche les 2 valeurs avec un "-"
      return (
        <td key={jour} className="schedule-cell">
          {`${amStart ? amStart + " - " + amEnd : ""}${
            amStart && pmStart ? "\n" : ""
          }${pmStart ? pmStart + " - " + pmEnd : ""}`}
        </td>
      );
    } else {
      // Si aucune n'est complétée, affiche "-"
      return (
        <td key={jour} className="schedule-cell">
          {"-"}
        </td>
      );
    }
  });
};

const TableDataScheduleWeek = ({ data, week, className }) => {
  if (!data || data.length === 0) {
    return <p>Aucune donnée à afficher.</p>;
  }

  const horaireSemaine = week === 1 ? "semaine1" : "semaine2";
  const joursSemaine = Object.keys(data[0][horaireSemaine]);

  return (
    <div>
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
          {data.map((personne, index) => (
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
