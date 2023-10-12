import React from "react";
import NavBarGlobal from "../../components/navbars/NavBarGlobal";
import NavBarEncodage from "../../components/navbars/NavBarEncodage";
import FormAnimation from "../../components/forms/FormAnimation";
import AnimatedContainer from "../../components/common/AnimatedContainer";

const Animations = () => {
  return (
    <div>
      <NavBarGlobal />
      <h1>Encodage des animations</h1>
      <NavBarEncodage />
      <AnimatedContainer containerClass="form-container">
        <FormAnimation />
      </AnimatedContainer>
    </div>
  );
};

export default Animations;
