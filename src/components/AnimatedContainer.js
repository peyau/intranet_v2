import React, { useState, useEffect } from "react";

function AnimatedContainer({ children, containerClass }) {
  const [showContainer, setShowContainer] = useState(false);

  useEffect(() => {
    setShowContainer(true);
  }, []);

  return (
    <div
      className={`${containerClass} ${showContainer ? "fade-in" : "hidden"}`}
    >
      {children}
    </div>
  );
}

export default AnimatedContainer;
