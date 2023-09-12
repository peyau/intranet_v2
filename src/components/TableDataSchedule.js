import React, { useState } from "react";
import FormatSchedule from "./FormatSchedule";

const TableDataSchedule = ({ data, className }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  if (!data || data.length === 0) {
    return <p>Aucune donnée à afficher.</p>;
  }

  const joursSemaine = Object.keys(data[0].semaine1);

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
            .map((personne, rowIndex) => (
              <React.Fragment key={rowIndex}>
                <tr>
                  <td className="personne-nom">{personne.nom}</td>
                </tr>
                <tr className="semaine1">
                  <td className="week-cell">Sem 1</td>
                  {joursSemaine.map((jour, colIndex) => (
                    <FormatSchedule
                      key={colIndex}
                      amStart={personne.semaine1[jour].amStart}
                      amEnd={personne.semaine1[jour].amEnd}
                      pmStart={personne.semaine1[jour].pmStart}
                      pmEnd={personne.semaine1[jour].pmEnd}
                    />
                  ))}
                </tr>

                <tr className="semaine2">
                  <td className="week-cell">Sem 2</td>
                  {joursSemaine.map((jour, colIndex) => (
                    <FormatSchedule
                      key={colIndex}
                      amStart={personne.semaine2[jour].amStart}
                      amEnd={personne.semaine2[jour].amEnd}
                      pmStart={personne.semaine2[jour].pmStart}
                      pmEnd={personne.semaine2[jour].pmEnd}
                    />
                  ))}
                </tr>
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDataSchedule;
