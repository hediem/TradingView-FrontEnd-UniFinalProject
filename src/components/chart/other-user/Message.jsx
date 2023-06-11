import React, { useContext } from "react";
import Image from "next/image";
import { UserContext } from "@/contexts/userContext";

import permium from "../../../assets/images/Crown.svg";
import favorite from "../../../assets/images/Like.svg";
import dislike from "../../../assets/images/Dislike.svg";
import republish from "../../../assets/images/Republish.svg";
import line from "../../../assets/images/Line.svg"
import more from "../../../assets/images/More.svg";

import { longDate } from "@/components/date";

const Message = () => {
    const { user, predict } = useContext(UserContext);

    return (
        <div
            style={{ backgroundColor: "#ffffff", borderRadius: "0px 0px 8px 8px" }}
            className="message row py-2 justify-content-end justify-content-lg-between"
        >
            <div className="d-flex justify-content-end">

                <Image src={more.src} width={13} height={4} />
            </div>

            <div className="d-flex-column d-xl-flex align-items-center justify-content-between col-12 col-md-6 col-lg-7">
                <div className="d-flex col-12 col-xl-3 align-items-center">
                    <Image src={user.image} width={40} height={40} className="icon me-3" />
                    <div>
                        <div style={{ fontWeight: "500" }}>
                            {user.firstName}{" "}
                            {user.lastName}
                        </div>
                        <div style={{ fontSize: "10px", color: "#65676B" }}>
                            World Rank: {user.keyData.worldRanking}
                        </div>
                        <div style={{ fontSize: "10px", color: "#65676B" }}>
                            Score: {user.keyData.score}
                        </div>
                    </div>
                </div>
                <div className="d-none d-xl-inline">
                    <img src={line.src} alt="line" />
                </div>
                <div className="d-flex flex-column col-12 col-xl-8" style={{ fontWeight: "500" }}>
                    <div style={{ color: "#65676B", fontSize: "10px" }}>
                        {longDate(predict.day)}
                    </div>
                    <div style={{ fontSize: "12px" }}>{predict.text}</div>
                </div>
            </div>
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
        </div>
    );
};

export default Message;
