import React from "react";

const Country = ({ darkMode }) => {
  return (
    <div className={`country ${darkMode ? "darkMode" : ""}`}>
      <div className="flag_container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg"
          alt=""
        />
      </div>

      <div className="details">
        <h1 className="name">Name</h1>
        <p>
          Population:{" "}
          <span className={`values ${darkMode ? "darkMode" : ""}`}>Test</span>
        </p>
        <p>
          Region:{" "}
          <span className={`values ${darkMode ? "darkMode" : ""}`}>Test</span>
        </p>
        <p>
          Capital:{" "}
          <span cclassName={`values ${darkMode ? "darkMode" : ""}`}>Test</span>
        </p>
      </div>
    </div>
  );
};

export default Country;
