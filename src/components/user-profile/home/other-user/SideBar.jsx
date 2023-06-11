import React, { useContext, useState } from "react";
import Image from "next/image";

import { UserContext } from "@/contexts/userContext";

import more from "../../../../assets/images/More.svg";
import arrowRight from "../../../../assets/images/Arrow-Right.svg";
import Details from "../common/Details";

const SideBar = () => {
    const { user, setMainSection } = useContext(UserContext);
    const [showArrow, setShowArrow] = useState(false);

    const [temp, setTemp] = useState(0);
    return (
        <div
            className="profile-sideBar row"
            style={{ justifyContent: "center" }}
        >
            <div className="col-12 col-lg-11 p-0" >
                <Details user={user} />
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
                    onClick={e => setMainSection("about")}
                    style={{ cursor: "pointer" }}
                >
                    <div>About</div>
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
        </div>
    );
};

export default SideBar;
