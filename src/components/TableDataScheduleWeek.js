import React from "react";

const TableDataScheduleWeek = ({ data, week, className }) => {
  if (!data || data.length === 0) {
    return <p>Aucune donnée à afficher.</p>;
  }

  const joursSemaine = Object.keys(data[0][`semaine${week}`]);
  const horaireSemaine = week === 1 ? "semaine1" : "semaine2";

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
              {joursSemaine.map((jour) => (
                <td key={jour} className="schedule-cell">
                  {personne[horaireSemaine] &&
                  personne[horaireSemaine][jour] &&
                  personne[horaireSemaine][jour].amStart &&
                  personne[horaireSemaine][jour].amEnd &&
                  personne[horaireSemaine][jour].pmStart &&
                  personne[horaireSemaine][jour].pmEnd
                    ? `${personne[horaireSemaine][jour].amStart} - ${personne[horaireSemaine][jour].amEnd}\n${personne[horaireSemaine][jour].pmStart} - ${personne[horaireSemaine][jour].pmEnd}`
                    : "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDataScheduleWeek;
