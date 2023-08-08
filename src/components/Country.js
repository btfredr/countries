import React from "react";

const Country = ({
  darkMode,
  name,
  capital,
  population,
  region,
  flag,
  showDetails,
  code,
}) => {
  const handleShowDetails = () => {
    showDetails(code);
  };

  return (
    <div
      className={`country ${darkMode ? "darkMode" : ""}`}
      onClick={handleShowDetails}
    >
      <div className="flag_container">
        <img src={flag} alt="" />
      </div>

      <div className="details">
        <h1 className="name">{name}</h1>
        <p>
          Population:{" "}
          <span className={`values ${darkMode ? "darkMode" : ""}`}>
            {population}
          </span>
        </p>
        <p>
          Region:{" "}
          <span className={`values ${darkMode ? "darkMode" : ""}`}>
            {region}
          </span>
        </p>
        <p>
          Capital:{" "}
          <span className={`values ${darkMode ? "darkMode" : ""}`}>
            {capital}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Country;
