import React from "react";

const FormatSchedule = ({ amStart, amEnd, pmStart, pmEnd }) => {
  if (amStart && amEnd && pmStart && pmEnd) {
    // Si les 4 valeurs sont complétées, affiche tout
    return (
      <td className="schedule-cell">
        {amStart} - {amEnd}
        <br />
        {pmStart} - {pmEnd}
      </td>
    );
  } else if ((amStart && amEnd) || (pmStart && pmEnd)) {
    // Si 2 seulement sont complétées, affiche les 2 valeurs avec un "-"
    return (
      <td className="schedule-cell">
        {amStart ? `${amStart} - ${amEnd}` : ""}
        {pmStart ? `${pmStart} - ${pmEnd}` : ""}
      </td>
    );
  } else {
    // Si aucune n'est complétée, affiche "-"
    return <td className="schedule-cell">{"-"}</td>;
  }
};

export default FormatSchedule;
