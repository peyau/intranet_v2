import React from "react";

const RadioButtonSelector = ({ options, selectedOption, onChange }) => {
  return (
    <div className="radio-button-selector">
      {options.map((option) => (
        <label
          key={option.value}
          className={selectedOption === option.value ? "selected" : ""}
          onClick={() => onChange(option.value)}
        >
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={() => onChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioButtonSelector;
