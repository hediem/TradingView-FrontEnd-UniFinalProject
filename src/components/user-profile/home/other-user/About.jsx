import React from "react";
import Image from "next/image";
import date from "@/components/date";

const About = ({ user }) => {
  return (
    <div className="col-12 row py-3" style={{ cursor: "pointer" }}>
      <div className="text-center">
        <div className="col-12 me-2">
          <Image
            src={user.image}
            alt="userImage"
            width={100}
            height={100}
            style={{ borderRadius: "6px" }}
          />
        </div>
        <div className="d-flex flex-column col-12">
          <div style={{ fontSize: "30px", fontWeight: "500" }}>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex-column d-xl-flex flex-wrap justify-content-between mb-2">
        <div className="col-12 col-xl-5 d-flex justify-content-between">
          <div style={{ color: "#65676B", fontWeight: "400" }}>Country:</div>
          <div style={{ color: "#000000", fontWeight: "400" }}>
            {user.country}
          </div>
        </div>
        <div className="col-12 col-xl-5 d-flex justify-content-between">
          <div style={{ color: "#65676B", fontWeight: "400" }}>
            Membership Date:
          </div>
          <div style={{ color: "#000000", fontWeight: "400" }}>
            {date(user.membershipDate)}
          </div>
        </div>
        <div className="col-12 col-xl-5 d-flex justify-content-between">
          <div style={{ color: "#65676B", fontWeight: "400" }}>
            Number of Twitts:
          </div>
          <div style={{ color: "#000000", fontWeight: "400" }}>
            {user.keyData.numberOfTwittes}
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex-column d-xl-flex flex-wrap justify-content-between mb-2">
        <div className="col-12 col-xl-5 d-flex justify-content-between">
          <div style={{ color: "#65676B", fontWeight: "400" }}>Followers:</div>
          <div style={{ color: "#000000", fontWeight: "400" }}>
            {user.follower}
          </div>
        </div>
        <div className="col-12 col-xl-5 d-flex justify-content-between">
          <div style={{ color: "#65676B", fontWeight: "400" }}>
            Following User:
          </div>
          <div style={{ color: "#000000", fontWeight: "400" }}>
            {user.following}
          </div>
        </div>
        <div className="col-12 col-xl-5 d-flex justify-content-between">
          <div style={{ color: "#65676B", fontWeight: "400" }}>
            Following Symbols:
          </div>
          <div style={{ color: "#000000", fontWeight: "400" }}>
            {user.followingSymbol}
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex-column d-xl-flex flex-wrap justify-content-between mb-2">
        <div className="col-12 col-xl-5 d-flex justify-content-between">
          <div style={{ color: "#65676B", fontWeight: "400" }}>
            Technichal analysis:
          </div>
          <div style={{ color: "#000000", fontWeight: "400" }}>
            {user.keyData.technicalAnalysis}
          </div>
        </div>
        <div className="col-12 col-xl-5 d-flex justify-content-between">
          <div style={{ color: "#65676B", fontWeight: "400" }}>Predicts:</div>
          <div style={{ color: "#000000", fontWeight: "400" }}>
            {user.keyData.predicts}
          </div>
        </div>
        <div className="col-12 col-xl-5 d-flex justify-content-between">
          <div style={{ color: "#65676B", fontWeight: "400" }}>
            True Predicts (%):
          </div>
          <div style={{ color: "#000000", fontWeight: "400" }}>
            %{user.keyData.truePredicts}
          </div>
        </div>
        <div className="col-12 col-xl-5 d-flex justify-content-between">
          <div style={{ color: "#65676B", fontWeight: "400" }}>
            Total Score:
          </div>
          <div style={{ color: "#000000", fontWeight: "400" }}>
            {user.keyData.score}
          </div>
        </div>
        <div className="col-12 col-xl-5 d-flex justify-content-between">
          <div style={{ color: "#65676B", fontWeight: "400" }}>
            World Ranking:
          </div>
          <div style={{ color: "#000000", fontWeight: "400" }}>
            {user.keyData.worldRanking}
          </div>
        </div>
        <div className="col-12 col-xl-5 d-flex justify-content-between">
          <div style={{ color: "#65676B", fontWeight: "400" }}>
            Country Ranking:
          </div>
          <div style={{ color: "#000000", fontWeight: "400" }}>
            {user.keyData.countryRanking}
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex-column d-xl-flex flex-wrap justify-content-between mb-2 text-start">
        <div style={{ color: "#65676B", fontWeight: "400" }}>Bio:</div>
        <div style={{ color: "#000000", fontWeight: "400" }}>{user.bio}</div>
      </div>
      <hr />
      <div className="d-flex-column flex-wrap text-start">
        <div style={{ color: "#65676B", fontWeight: "400" }}>Links:</div>
        <div style={{ color: "#000000", fontWeight: "400" }}>
          Home Page:
          <div className="my-ellipsis">{user.link}</div>
        </div>
        <div style={{ color: "#000000", fontWeight: "400" }}>
          Official Page:
          <div className="my-ellipsis">{user.link}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
