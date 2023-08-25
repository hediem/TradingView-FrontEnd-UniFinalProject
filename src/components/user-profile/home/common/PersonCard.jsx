import React from "react";
import Image from "next/image";

const PersonCard = ({ user }) => {
  return (
    <div
      className="col-10 col-sm-6 row person-card"
      style={{ cursor: "pointer", maxWidth: "314px" }}
    >
      <div className="col-3 col-xxl-2 me-2">
        <Image
          src={user.image}
          alt="userImage"
          width={61}
          height={61}
          style={{ borderRadius: "6px" }}
        />
      </div>
      <div className="d-flex flex-column col-7">
        <div style={{ fontSize: "30px", fontWeight: "400" }}>
          {user.firstName} {user.lastName}
        </div>
        <div style={{ fontSize: "14px", fontWeight: "500" }}>
          Country: {user.country}
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
