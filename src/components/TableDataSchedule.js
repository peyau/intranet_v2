import React from "react";

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
              {joursSemaine.map((jour, colIndex) => (
                <td key={colIndex} className="schedule-cell">
                  {personne.semaine1[jour] &&
                  personne.semaine1[jour].amStart &&
                  personne.semaine1[jour].amEnd &&
                  personne.semaine1[jour].pmStart &&
                  personne.semaine1[jour].pmEnd
                    ? `${personne.semaine1[jour].amStart} - ${personne.semaine1[jour].amEnd}\n${personne.semaine1[jour].pmStart} - ${personne.semaine1[jour].pmEnd}`
                    : "-"}
                </td>
              ))}
            </tr>
            <tr className="semaine2">
              <td className="week-cell">Sem 2</td>
              {joursSemaine.map((jour, colIndex) => (
                <td key={colIndex} className="schedule-cell">
                  {personne.semaine2[jour] &&
                  personne.semaine2[jour].amStart &&
                  personne.semaine2[jour].amEnd &&
                  personne.semaine2[jour].pmStart &&
                  personne.semaine2[jour].pmEnd
                    ? `${personne.semaine2[jour].amStart} - ${personne.semaine2[jour].amEnd}\n${personne.semaine2[jour].pmStart} - ${personne.semaine2[jour].pmEnd}`
                    : "-"}
                </td>
              ))}
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default TableDataSchedule;
