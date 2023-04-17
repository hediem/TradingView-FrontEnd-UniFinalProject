import React, { useContext } from "react";
import Image from "next/image";
import { UserContext } from "@/contexts/userContext";

import permium from "../../../assets/images/Crown.svg";
import favorite from "../../../assets/images/Like.svg";
import dislike from "../../../assets/images/Dislike.svg";
import republish from "../../../assets/images/Republish.svg";

const Message = () => {
    const { user, predict } = useContext(UserContext);

    return (
        <div
            style={{ backgroundColor: "#ffffff", borderRadius: "0px 0px 8px 8px" }}
            className="message row py-2 justify-content-end justify-content-lg-between"
        >
            <div className="d-flex align-items-center col-12 col-md-6 col-lg-6">
                <Image src={user.image} width={40} height={40} className="icon me-3" />
                <div className="d-flex flex-column" style={{ fontWeight: "500" }}>
                    <div style={{ color: "#65676B", fontSize: "10px" }}>
                        {predict.day}
                    </div>
                    <div style={{ fontSize: "12px" }}>{predict.text}</div>
                </div>
            </div>
            <div
                className="d-flex flex-row col-10 col-sm-6 col-lg-4 justify-content-between align-items-end"
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
