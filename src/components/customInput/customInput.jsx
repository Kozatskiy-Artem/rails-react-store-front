import "./customInput.css";

const CustomInput = ({ label, placeholder, type, defaultValue }) => {
  return (
    <label className="label">
      {label && <span className="inputLabel">{label}</span>}
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </label>
  );
};

export default CustomInput;
