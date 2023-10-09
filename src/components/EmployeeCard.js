import React, { useState } from "react";
import importedImages from "./ImportImages.js";

const employeesData = [
  {
    id: 1,
    nom: "Lemeire",
    prenom: "Elodie",
    fonction: "Chargée de communication",
    bureau: "4e étage",
    telephone: "056/860.691",
  },
  {
    id: 2,
    nom: "Levaux",
    prenom: "Jonathan",
    fonction: "Responsable informatique",
    bureau: "1er étage",
    telephone: "056/860.692",
  },
  {
    id: 3,
    nom: "Desmet",
    prenom: "Mathilde",
    fonction: "Animatrice EPN",
    bureau: "1er étage",
    telephone: "056/860.692",
  },

  // ... autres employés
];

function EmployeeCard() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employeesData.filter(
    (employee) =>
      employee.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.fonction.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Tri par ordre alphabétique
  const sortedEmployees = filteredEmployees.sort((a, b) =>
    a.nom.localeCompare(b.nom)
  );

  return (
    <div>
      {/* Champ de saisie pour la recherche */}
      <div className="cardSearchBar">
        <input
          type="text"
          placeholder="Rechercher par nom"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="cardContainer">
        {sortedEmployees.map((employee) => {
          const imageEmployee = `${employee.prenom}_${employee.nom}`;
          return (
            <div className="card" key={employee.id}>
              <img
                src={importedImages[imageEmployee]}
                alt={`${employee.prenom} ${employee.nom}`}
                className="employeeImage"
              />

              <div className="cardContent">
                <span className="name">
                  {employee.prenom} {employee.nom}
                </span>
                <div className="div-details">
                  <span className="details">{employee.fonction}</span>
                  <span className="details">{employee.bureau}</span>
                  <span className="details">{employee.telephone}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EmployeeCard;
