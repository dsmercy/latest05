import React from "react";

const WizardButton = ({ onClick, children }) => {
  return (
    <button className="wizard-btn" type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default WizardButton;