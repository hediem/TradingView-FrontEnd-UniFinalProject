import React from "react";
import Image from "next/image";

import more from "../../../../assets/images/More.svg";
import date from "@/components/date";

const Details = ({ user }) => {
    return (
        <div
            className="card d-flex flex-row py-3 mb-2 row"
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
                    <span>Membership Date:</span> <span>{date(user.membershipDate)}</span>
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
    )
}

export default Details;