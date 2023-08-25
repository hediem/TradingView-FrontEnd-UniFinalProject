import React, { useContext, useState } from "react";
import Image from "next/image";

import arrowRight from "../../assets/images/Arrow-Right.svg";
import Details from "./common/Details";
import { SymbolContext } from "@/contexts/symbolContext";

const SideBar = () => {
  const { symbol, setMainSection } = useContext(SymbolContext);
  const [showArrow, setShowArrow] = useState(false);

  const [temp, setTemp] = useState(0);
  return (
    <div className="profile-sideBar row justify-content-center justify-content-lg-start">
      <div className="col-12 p-0">
        <Details symbol={symbol} />
      </div>

      <div
        className="card d-flex py-3 col-12"
        style={{
          backgroundColor: "hsla(360, 100%, 100%, 0.6)",
          fontWeight: "500",
          margin: "10px 0px",
        }}
      >
        <div
          className="d-flex flex-row justify-content-between item"
          onMouseEnter={(e) => {
            setShowArrow(true);
            setTemp(1);
          }}
          onMouseLeave={(e) => {
            setShowArrow(false);
            setTemp(0);
          }}
          onClick={(e) => setMainSection("overview")}
          style={{
            cursor: "pointer",
            color: showArrow && temp === 1 ? "#227AEF" : "",
          }}
        >
          <div>OverView</div>
          {showArrow === true && temp === 1 ? (
            <Image src={arrowRight.src} width={7} height={12} alt="arrow" />
          ) : (
            ""
          )}
        </div>
        <hr />
        <div
          className="d-flex flex-row justify-content-between item"
          onMouseEnter={(e) => {
            setShowArrow(true);
            setTemp(2);
          }}
          onMouseLeave={(e) => {
            setShowArrow(false);
            setTemp(0);
          }}
          onClick={(e) => setMainSection("profile")}
          style={{
            cursor: "pointer",
            color: showArrow && temp === 2 ? "#227AEF" : "",
          }}
        >
          <div>Profile</div>
          {showArrow === true && temp === 2 ? (
            <Image src={arrowRight.src} width={7} height={12} alt="arrow" />
          ) : (
            ""
          )}
        </div>
        <hr />

        <div
          className="d-flex flex-row justify-content-between item"
          onMouseEnter={(e) => {
            setShowArrow(true);
            setTemp(3);
          }}
          onMouseLeave={(e) => {
            setShowArrow(false);
            setTemp(0);
          }}
          onClick={(e) => setMainSection("follower")}
          style={{
            cursor: "pointer",
            color: showArrow && temp === 3 ? "#227AEF" : "",
          }}
        >
          <div>{`Follower (${symbol.follower})`}</div>
          {showArrow === true && temp === 3 ? (
            <Image src={arrowRight.src} width={7} height={12} alt="arrow" />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
