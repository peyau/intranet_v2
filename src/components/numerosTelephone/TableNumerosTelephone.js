import React from "react";

const TableNumerosTelephone = ({ data }) => {
  return (
    <table className="phone-table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Numéro</th>
        </tr>
      </thead>
      <tbody>
        {data.map((element, index) => (
          <tr key={index}>
            <td>{element.nom}</td>
            <td>{element.numero}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableNumerosTelephone;
