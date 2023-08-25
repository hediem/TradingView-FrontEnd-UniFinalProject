import React, { useContext, useState } from "react";
import Image from "next/image";

import permium from "../../../assets/images/Crown.svg";
import favorite from "../../../assets/images/Like.svg";
import dislike from "../../../assets/images/Dislike.svg";
import correct from "../../../assets/images/Correct.svg";
import close from "../../../assets/images/Close.svg";
import target from "../../../assets/images/Target.svg";
import up from "../../../assets/images/Up.svg";
import down from "../../../assets/images/Down.svg";
import more from "../../../assets/images/More.svg";
import { UserContext } from "@/contexts/userContext";
import { longDate } from "@/components/date";

const SymbolPredict = ({ data, index }) => {
  const [showMore, setShowMore] = useState(false);
  const { setPredict } = useContext(UserContext);
  return (
    <div
      className="col-12 col-md-11 col-lg-12 col-xxl-12 justify-content-between row predict-card py-1"
      key={index}
      onMouseEnter={(e) => {
        setShowMore(true);
      }}
      onMouseLeave={(e) => {
        setShowMore(false);
      }}
    >
      <div
        style={{
          display: "inherit",
          justifyContent: "flex-end",
          cursor: "pointer",
          right: "5px",
          top: "10px",
          position: "relative",
        }}
      >
        {showMore ? (
          <Image src={more.src} width={13} height={4} />
        ) : (
          <div style={{ width: "13px", height: "4px" }}></div>
        )}
      </div>
      <div className="d-flex align-items-center col-12 col-sm-6 col-lg-12 col-xxl-6 ps-2">
        <Image
          src={data.writerProfile}
          width={47}
          height={46}
          style={{ cursor: "pointer", borderRadius: "5px" }}
          onClick={(e) => setPredict(data)}
        />
        <div className="ms-2">
          <div
            style={{ fontSize: "14px", fontWeight: "500", cursor: "pointer" }}
            onClick={(e) => setPredict(data)}
          >
            {data.writer}
          </div>
          <div
            style={{ fontSize: "10px", fontWeight: "400", color: "#65676B" }}
          >
            {longDate(data.day)}
          </div>
          <div
            style={{ fontSize: "10px", fontWeight: "400", color: "#65676B" }}
          >
            Rank: {data.rank}
          </div>
        </div>
      </div>
      <div className="d-flex flex-column col-12 col-sm-6 col-lg-12 col-xxl-6 row px-0 justify-content-end">
        <div className="d-flex flex-row col-12" style={{ color: "#657786" }}>
          {/* {data.permium.flag ? (
            <div className="col-3">
              <Image src={permium.src} width={16} height={16} />
              <span style={{ fontSize: "13px", marginLeft: "2px" }}>
                {data.permium.num}
              </span>
            </div>
          ) : (
            <div className="col-3"></div>
          )} */}
          <div style={{ cursor: "pointer" }} className="col-4">
            <Image src={favorite.src} width={16} height={16} />
            <span style={{ fontSize: "13px", marginLeft: "2px" }}>
              {data.favorite}
            </span>
          </div>
          <div style={{ cursor: "pointer" }} className="col-4">
            <Image src={dislike.src} width={16} height={16} />
            <span style={{ fontSize: "13px", marginLeft: "2px" }}>
              {data.disLike}
            </span>
          </div>
          {data.completed ? (
            <div className="col-4">
              <Image src={correct.src} width={16} height={16} />
            </div>
          ) : data.target.flag ? (
            <div className="col-4">
              <Image src={target.src} width={16} height={16} />
              {data.target.up ? (
                <Image src={up.src} width={16} height={16} />
              ) : (
                <Image src={down.src} width={16} height={16} />
              )}
              <span style={{ fontSize: "10px" }}>{data.target.num}</span>
            </div>
          ) : !data.completed ? (
            <div className="col-4">
              <Image src={close.src} width={16} height={16} />
            </div>
          ) : (
            <div className="col-4"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SymbolPredict;
