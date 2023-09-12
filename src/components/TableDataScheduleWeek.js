import React, { useState } from "react";
import FormatSchedule from "./FormatSchedule";

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
            .filter(
              (personne) =>
                personne.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                personne.prenom.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((personne, index) => (
              <tr key={index}>
                <td className="personne-nom">
                  {personne.nom} {personne.prenom}
                </td>
                {joursSemaine.map((jour, colIndex) => (
                  <FormatSchedule
                    key={colIndex}
                    amStart={personne[horaireSemaine][jour].amStart}
                    amEnd={personne[horaireSemaine][jour].amEnd}
                    pmStart={personne[horaireSemaine][jour].pmStart}
                    pmEnd={personne[horaireSemaine][jour].pmEnd}
                  />
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDataScheduleWeek;
