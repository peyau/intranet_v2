import React from "react";
import NavBarGlobal from "../../components/NavBarGlobal";
import NavBarInfosPratiques from "../../components/NavBarInfosPratiques";
import AnimatedContainer from "../../components/AnimatedContainer";

const FAQ = () => {
  return (
    <div>
      <NavBarGlobal />
      <h1>FAQ</h1>
      <NavBarInfosPratiques />
      <AnimatedContainer containerClass="sub-container">
        <h2>La FAQ</h2>
      </AnimatedContainer>
    </div>
  );
};

export default FAQ;
