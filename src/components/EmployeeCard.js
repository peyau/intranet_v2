import React, { useState } from "react";
import importedImages from "./ImportImages.js";
import ModalEmploye from "./modals/ModalEmploye";

const employeesData = [
  {
    id: 1,
    nom: "Lemeire",
    prenom: "Elodie",
    fonction: "Chargée de communication",
    bureau: "4e étage",
    telephone: "056/860.691",
    cercle: "Ceci est une information qu'on ne voit pas sur la page 'Equipe'",
  },
  {
    id: 2,
    nom: "Levaux",
    prenom: "Jonathan",
    fonction: "Responsable informatique",
    bureau: "1er étage",
    telephone: "056/860.692",
    cercle: "Ceci est une information qu'on ne voit pas sur la page 'Equipe'",
  },
  {
    id: 3,
    nom: "Desmet",
    prenom: "Mathilde",
    fonction: "Animatrice EPN",
    bureau: "1er étage",
    telephone: "056/860.692",
    cercle: "Ceci est une information qu'on ne voit pas sur la page 'Equipe'",
  },

  // ... autres employés
];

const EmployeeCard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
  };

  const handleCloseModal = () => {
    setSelectedEmployee(null);
  };

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
            <div
              className="card"
              key={employee.id}
              onClick={() => handleEmployeeClick(employee)}
            >
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
      <ModalEmploye
        selectedEmployee={selectedEmployee}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default EmployeeCard;
