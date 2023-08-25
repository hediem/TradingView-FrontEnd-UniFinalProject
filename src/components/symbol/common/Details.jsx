import React from "react";
import Image from "next/image";

import more from "../../../assets/images/More.svg";
import icon from "../../../assets/images/Icon.png";

import { addComma } from "@/utility/addComma";
import { dateWithClock } from "@/components/date";

const Details = ({ symbol }) => {
  const dateOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return (
    <div
      className="card d-flex flex-row pt-3 mb-2 row align-items-center"
      style={{
        backgroundColor: "hsla(360, 100%, 100%, 0.6)",
        padding: "0px",
      }}
    >
      <div
        style={{
          display: "inherit",
          justifyContent: "flex-end",
          cursor: "pointer",
          right: "15px",
          position: "relative",
        }}
      >
        <Image src={more.src} width={13} height={4} />
      </div>

      <div
        className="col-3"
        style={{
          backgroundColor: "#F0F2F5",
          borderRadius: "7px",
          textAlign: "center",
          padding: "15px 0px",
          marginLeft: "20px",
        }}
      >
        <Image
          src={symbol.image}
          alt="symbolImage"
          width={62}
          height={62}
          style={{ borderRadius: "6px" }}
        />
      </div>
      <div className="d-flex flex-column col-8">
        <div style={{ fontSize: "14px", fontWeight: "400" }}>{symbol.name}</div>
        <div
          style={{ fontSize: "15px", fontWeight: "400" }}
          className="d-flex flex-column flex-sm-row flex-lg-column flex-xxl-row align-items-sm-center align-items-lg-start align-items-xxl-center"
        >
          <div>
            $
            <span style={{ fontSize: "30px", fontWeight: "400" }}>
              {addComma(symbol.price)}{" "}
            </span>
          </div>
          <div>
            <span
              style={{
                fontSize: "18px",
                fontWeight: "400",
                color: symbol.changes.type === 0 ? "#3E9E3E" : "#CA0813",
              }}
            >
              {addComma(symbol.changes.price)} ({symbol.changes.percent}%)
            </span>
          </div>
        </div>
        <div
          className="d-flex flex-column flex-sm-row flex-lg-column flex-xl-row"
          style={{
            fontSize: "12px",
            color: "#6A6A6A",
            fontWeight: "400",
          }}
        >
          <span>Last Updated: </span>
          <span> {dateWithClock(symbol.update)}</span>
        </div>

        {/* <div
                    className="d-flex flex-row flex-lg-column flex-xl-row justify-content-between"
                    style={{ fontSize: "12px", color: "#6A6A6A", fontWeight: "400" }}
                >
                    <div>Following: {symbol.following}</div>
                    <div>Follower: {symbol.follower}</div>
                </div> */}
      </div>
      <div className="col-1"></div>
      <div
        className="col-12 d-flex justify-content-end"
        style={{ position: "relative", top: "-15px" }}
      >
        <div
          style={{
            cursor: "pointer",
            backgroundColor: "#F0F2F5",
            borderRadius: "5px",
            width: "fit-content",
            padding: "5px",
            display: "flex",
          }}
        >
          <Image src={icon.src} width={12} height={11} />
        </div>
      </div>
    </div>
  );
};

export default Details;
