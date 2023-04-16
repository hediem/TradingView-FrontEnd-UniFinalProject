import React, { useContext, useState } from "react";
import Image from "next/image";

import { UserContext } from "@/contexts/userContext";

import more from "../../assets/images/More.svg";
import arrowRight from "../../assets/images/Arrow-Right.svg";

const SideBar = () => {
    const { user, setMainSection } = useContext(UserContext);
    const [showArrow, setShowArrow] = useState(false);

    const [temp, setTemp] = useState(0);
    return (
        <div
            className="profile-sideBar row pt-3"
            style={{ justifyContent: "center" }}
        >
            <div
                className="card d-flex flex-row py-3 col-12 col-lg-11 mb-2 row"
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

                <div className="col-4 col-xxl-3">
                    <Image
                        src={user.image}
                        alt="userImage"
                        width={96}
                        height={96}
                        style={{ borderRadius: "6px" }}
                    />
                </div>
                <div className="d-flex flex-column ms-3 col-7 col-xxl-6">
                    <div style={{ fontSize: "30px", fontWeight: "500" }}>
                        {user.firstName} {user.lastName}
                    </div>
                    <div style={{ fontSize: "14px", fontWeight: "500" }}>
                        Country: {user.country}
                    </div>
                    <div
                        className="d-flex flex-column flex-sm-row flex-lg-column flex-xl-row"
                        style={{
                            fontSize: "12px",
                            color: "#6A6A6A",
                            // display: "flex",
                            // flexDirection: "row",
                            justifyContent: "space-between",
                            fontWeight: "400",
                        }}
                    >
                        <span>Membership Date:</span> <span>{user.membershipDate}</span>
                    </div>
                    <div
                        className="d-flex flex-row flex-lg-column flex-xl-row justify-content-between"
                        style={{ fontSize: "12px", color: "#6A6A6A", fontWeight: "400" }}
                    >
                        <div>Following: {user.following}</div>
                        <div>Follower: {user.follower}</div>
                    </div>
                </div>
            </div>

            <div
                className="card d-flex flex-row py-3 col-12 col-lg-11 mb-2 row"
                style={{
                    backgroundColor: "hsla(360, 100%, 100%, 0.6)",
                    fontWeight: "500",
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
                    onClick={e => setMainSection("timeline")}
                    style={{ cursor: "pointer" }}
                >
                    <div>TimeLine</div>
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
                    onClick={e => setMainSection("follower")}
                    style={{ cursor: "pointer" }}
                >
                    <div>{`Follower (${user.follower})`}</div>
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
                    onClick={e => setMainSection("following-user")}
                    style={{ cursor: "pointer" }}
                >
                    <div>{`Following User (${user.following})`}</div>
                    {showArrow === true && temp === 3 ? (
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
                        setTemp(4);
                    }}
                    onMouseLeave={(e) => {
                        setShowArrow(false);
                        setTemp(0);
                    }}
                    onClick={e => setMainSection("following-symbol")}
                    style={{ cursor: "pointer" }}
                >
                    <div>{`Following Symbol (${user.followingSymbol})`}</div>
                    {showArrow === true && temp === 4 ? (
                        <Image src={arrowRight.src} width={7} height={12} alt="arrow" />
                    ) : (
                        ""
                    )}
                </div>
            </div>

            <div
                className="card d-flex flex-row py-3 col-12 col-lg-11 mb-2 row"
                style={{
                    backgroundColor: "hsla(360, 100%, 100%, 0.6)",
                    fontWeight: "500",
                }}
            >
                <div
                    className="ps-3"
                    style={{ fontSize: "17px", fontWeight: "600", padding: "6px 5px" }}
                >
                    Key Data
                </div>
                <hr />
                <div className="px-5">
                    <div
                        className="d-flex flex-row justify-content-between"
                        style={{ fontSize: "12px", fontWeight: "600", padding: "6px 5px" }}
                    >
                        <span>World Ranking:</span> {user.keyData.worldRanking}
                    </div>
                    <hr />
                    <div
                        className="d-flex flex-row justify-content-between"
                        style={{ fontSize: "12px", fontWeight: "600", padding: "6px 5px" }}
                    >
                        <span>Country Ranking:</span> {user.keyData.countryRanking}
                    </div>
                    <hr />
                    <div
                        className="d-flex flex-row justify-content-between"
                        style={{ fontSize: "12px", fontWeight: "600", padding: "6px 5px" }}
                    >
                        <span>Number Of Twittes:</span> {user.keyData.numberOfTwittes}
                    </div>
                    <hr />
                    <div
                        className="d-flex flex-row justify-content-between"
                        style={{ fontSize: "12px", fontWeight: "600", padding: "6px 5px" }}
                    >
                        <span>Technical Analysis:</span> {user.keyData.technicalAnalysis}
                    </div>
                    <hr />
                    <div
                        className="d-flex flex-row justify-content-between"
                        style={{ fontSize: "12px", fontWeight: "600", padding: "6px 5px" }}
                    >
                        <span>Predicts:</span> {user.keyData.predicts}
                    </div>
                </div>
            </div>

            <div
                className="card d-flex flex-row py-3 col-12 col-lg-11 mb-2 row"
                style={{
                    backgroundColor: "hsla(360, 100%, 100%, 0.6)",
                    fontWeight: "500",
                }}
            >
                <div
                    className="ps-3 d-flex flex-row justify-content-between align-items-start"
                    style={{ fontSize: "17px", fontWeight: "600", padding: "6px 5px" }}
                >
                    About
                    <div
                        style={{
                            display: "inherit",
                            justifyContent: "flex-end",
                            cursor: "pointer",
                        }}
                    >
                        <Image src={more.src} width={13} height={4} />
                    </div>
                </div>
                <hr />
                <div className="px-5">
                    <div
                        className="d-flex flex-column justify-content-between"
                        style={{ fontSize: "12px", fontWeight: "600", padding: "6px 5px" }}
                    >
                        <div>Bio</div>
                        <div style={{ fontWeight: "normal", padding: "5px 0px" }}>
                            {user.bio}
                        </div>
                    </div>
                    <hr />
                    <div
                        className="d-flex flex-row justify-content-between"
                        style={{ fontSize: "12px", fontWeight: "600", padding: "6px 5px" }}
                    >
                        <span>Country Ranking:</span> {user.keyData.countryRanking}
                    </div>
                    <hr />
                    <div
                        className="d-flex flex-row justify-content-between"
                        style={{ fontSize: "12px", fontWeight: "600", padding: "6px 5px" }}
                    >
                        <span>Number Of Twittes:</span> {user.keyData.numberOfTwittes}
                    </div>
                    <hr />
                    <div
                        className="d-flex flex-row justify-content-between"
                        style={{ fontSize: "12px", fontWeight: "600", padding: "6px 5px" }}
                    >
                        <span>Technical Analysis:</span> {user.keyData.technicalAnalysis}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
