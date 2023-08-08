import React from "react";

const Country = () => {
  return (
    <div className="country">
      <div className="flag_container">
        <img src="" alt="" />
      </div>

      <div className="details">
        <h1 className="name">Name</h1>
        <p>
          Population: <span className="values">Test</span>
        </p>
        <p>
          Region: <span className="values">Test</span>
        </p>
        <p>
          Capital: <span className="values">Test</span>
        </p>
      </div>
    </div>
  );
};

export default Country;
