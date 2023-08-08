import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const CountryDetails = () => {
  return (
    <div className="country_details">
      <button className="back">
        <ArrowBackIcon />
        <p>Go Back</p>
      </button>

      <div className="country_details_body">
        <div className="img_container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
