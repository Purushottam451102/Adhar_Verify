import React from "react";
import "./AadhaarDetails.css";

const AadhaarDetails = ({ data }) => {
  if (!data) return <div className="aadhaar-card">No Aadhaar data provided.</div>;

  const {
    full_name,
    aadhaar_number,
    dob,
    gender,
    address,
    profile_image,
  } = data;

  const formattedAadhaar = aadhaar_number
    ? `XXXX XXXX X${aadhaar_number.slice(-4)}`
    : "";

  const fullAddress = address
    ? `${address.vtc || ""}, ${address.dist || ""}`
    : "";

  return (
    <div className="aadhaar-card">
      {profile_image && (
        <img
          src={`data:image/jpeg;base64,${profile_image}`}
          alt="Profile"
          className="aadhaar-profile-image"
        />
      )}

      <div className="aadhaar-status">
        <span className="aadhaar-status-text">{formattedAadhaar}</span>
      </div>

      <div className="aadhaar-details">
        <div className="aadhaar-row">
          <span className="label">Aadhaar No.</span>
          <span className="value">{formattedAadhaar}</span>
        </div>

        <div className="aadhaar-row">
          <span className="label">Name</span>
          <span className="value">{full_name}</span>
        </div>

        <div className="aadhaar-row">
          <span className="label">Gender</span>
          <span className="value">
            {gender === "M" ? "Male" : gender === "F" ? "Female" : gender}
          </span>
        </div>

        <div className="aadhaar-row">
          <span className="label">Date of Birth</span>
          <span className="value">{dob}</span>
        </div>

        <div className="aadhaar-row">
          <span className="label">Address</span>
          <span className="value">{fullAddress}</span>
        </div>
      </div>
    </div>
  );
};

export default AadhaarDetails;
