import React, { useState } from "react";
import "./cabinet-page.css";
import CustomInput from "../../components/customInput/customInput";

const CabinetPage = ({ email, firstName, lastName }) => {
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
  };

  return (
    <div className="user-profile">
      <h2>Персональний кабінет</h2>
      <p>Email: {email}</p>
      {editing ? (
        <div>
          <CustomInput label={"Ім'я"} placeholder={"Ім'я"} type="text" />
          <CustomInput
            label={"Прізвище"}
            placeholder={"Прізвище"}
            type="text"
          />
          <button onClick={handleSaveClick}>Зберегти</button>
        </div>
      ) : (
        <div>
          <p>Ім'я: {firstName}</p>
          <p>Прізвище: {lastName}</p>
          <button onClick={handleEditClick}>Редагувати</button>
        </div>
      )}
    </div>
  );
};

export default CabinetPage;
