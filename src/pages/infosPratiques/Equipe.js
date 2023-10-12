import React from "react";
import NavBarGlobal from "../../components/navbars/NavBarGlobal";
import NavBarInfosPratiques from "../../components/navbars/NavBarInfosPratiques";
import AnimatedContainer from "../../components/common/AnimatedContainer";
import EmployeeCard from "../../components/pageComponents/equipe/EmployeeCard";

const Equipe = (employees) => {
  return (
    <div>
      <NavBarGlobal />
      <h1>Equipe</h1>
      <NavBarInfosPratiques />
      <AnimatedContainer containerClass="sub-container">
        <h2>Les infos de l'équipe</h2>
        <EmployeeCard />
      </AnimatedContainer>
    </div>
  );
};

export default Equipe;
