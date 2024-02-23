import React from "react";
import "./customInput.css";

const CustomInput = ({ label, placeholder, type, value, onChange }) => {
  return (
    <label className="label">
      {label && <span className="inputLabel">{label}</span>}
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default CustomInput;
