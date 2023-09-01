import React from "react";

const TableData = ({ data, className }) => {
  if (!data || data.length === 0) {
    return <p>Aucune donnée à afficher.</p>;
  }

  const columns = Object.keys(data[0]);

  return (
    <table className={`${className}`}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((element, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>
                {element[column].split("\n").map((line, lineIndex) => (
                  <div key={lineIndex}>{line}</div>
                ))}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableData;
