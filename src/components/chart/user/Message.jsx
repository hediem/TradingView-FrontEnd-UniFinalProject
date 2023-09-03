import React, { useContext } from "react";
import Image from "next/image";
import { UserContext } from "@/contexts/userContext";

import permium from "@/assets/images/Crown.svg";
import favorite from "@/assets/images/Like.svg";
import dislike from "@/assets/images/Dislike.svg";
import republish from "@/assets/images/Republish.svg";
import tick from "@/assets/images/checked.png";
import line from "@/assets/images/Line.svg";
import { longDate } from "@/components/date";

const Message = ({ symbolFlag }) => {
  const { user, predict } = useContext(UserContext);

  return (
    <div
      style={{ backgroundColor: "#ffffff", borderRadius: "0px 0px 8px 8px" }}
      className="message row py-2 justify-content-end justify-content-lg-between"
    >
      <div
        className={`d-flex-column d-xl-flex align-items-center ${
          predict.autosave === undefined
            ? "col-12 col-md-6 col-lg-7"
            : "col-12 col-xxl-7"
        }`}
        // style={{ maxWidth: predict.autosave !== undefined ? "60%" : "" }}
      >
        <Image src={user.image} width={40} height={40} className="icon me-3" />
        {symbolFlag && predict.autosave === undefined ? (
          <div
            className="d-flex col-12 col-xl-2 align-items-center"
            style={{ maxWidth: "100px" }}
          >
            <div>
              <div style={{ fontWeight: "500" }}>
                {user.firstName} {user.lastName}
              </div>
              <div style={{ fontSize: "10px", color: "#65676B" }}>
                World Rank: {user.keyData.worldRanking}
              </div>
              <div style={{ fontSize: "10px", color: "#65676B" }}>
                Score: {user.keyData.score}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {predict.autosave === undefined ? (
          <>
            <div className="d-none d-xl-inline">
              <img src={line.src} alt="line" />
            </div>
            <div
              className="d-flex flex-column col-12 col-xl-8 ms-xl-2"
              style={{ fontWeight: "500" }}
            >
              <div style={{ color: "#65676B", fontSize: "10px" }}>
                {longDate(predict.day)}
              </div>
              <div style={{ fontSize: "12px" }}>{predict.text}</div>
            </div>
          </>
        ) : (
          <input
            type="text"
            style={{
              width: "100%",
              height: "55px",
              border: "none",
              borderRadius: "10px",
              backgroundColor: "#F0F2F5",
              fontSize: "13px",
              padding: "10px 13px",
            }}
            placeholder="Write description of your technical analysis ..."
          />
        )}
      </div>
      {predict.autosave === undefined ? (
        <div
          className="d-flex flex-row col-10 col-sm-6 col-lg-3 justify-content-between align-items-end"
          style={{ color: "#657786" }}
        >
          <div>
            {predict.permium.flag ? (
              <div>
                <Image src={permium.src} width={16} height={16} />
                <span style={{ fontSize: "13px", marginLeft: "2px" }}>
                  {predict.permium.num}
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div style={{ cursor: "pointer" }}>
            <Image src={favorite.src} width={16} height={16} />
            <span style={{ fontSize: "13px", marginLeft: "2px" }}>
              {predict.favorite}
            </span>
          </div>
          <div style={{ cursor: "pointer" }}>
            <Image src={dislike.src} width={16} height={16} />
            <span style={{ fontSize: "13px", marginLeft: "2px" }}>
              {predict.disLike}
            </span>
          </div>
          <div style={{ cursor: "pointer" }}>
            <Image src={republish.src} width={16} height={16} />
            <span style={{ fontSize: "13px", marginLeft: "2px" }}>
              {predict.republish}
            </span>
          </div>
        </div>
      ) : (
        <div
          className="d-flex flex-row col-12 col-sm-9 col-lg-7 col-xl-6 col-xxl-5 justify-content-between align-items-end mt-3"
          style={{ maxWidth: "430px" }}
        >
          <div
            className="d-flex align-items-center justify-content-lg-around"
            style={{ width: "65%" }}
          >
            <div
              className="d-flex flex-column "
              style={{
                border: "1px solid #f0f2f5",
                borderRadius: "5px",
              }}
            >
              <div
                style={{ padding: "4px 15px", fontWeight: "600" }}
                className="d-flex align-items-center justify-content-between"
              >
                <Image src={tick} alt="tick" width={20} height={20} />
                Predict
              </div>
              <hr style={{ margin: "0px" }} />
              <div
                style={{
                  margin: "4px 10px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div></div>
                <Image src={line} alt="line" height={25} />
                <div></div>
              </div>
            </div>
            <div
              className="d-flex flex-column"
              style={{
                border: "1px solid #f0f2f5",
                borderRadius: "5px",
              }}
            >
              <div
                style={{ padding: "4px 15px", fontWeight: "600" }}
                className="d-flex align-items-center justify-content-between"
              >
                <Image src={tick} alt="tick" width={20} height={20} />
                Premium
              </div>
              <hr style={{ margin: "0px" }} />
              <div
                style={{
                  backgroundColor: "#F0F2F5",
                  borderRadius: "6px",
                  margin: "4px 5px",
                  padding: "0px 3px",
                }}
              >
                1000
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#F0F2f5",
              padding: "4px 15px",
              borderRadius: "5px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Publish
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
