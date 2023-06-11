import React, { useContext, useState } from "react";
import Image from "next/image";
import { UserContext } from "@/contexts/userContext";

import rectangle from "../../../assets/images/Rectangle.svg";

import Predict from "./Predict";
const Predicts = () => {
    const [active, setActive] = useState("last");
    const { user, sortByLike, sortByLast } = useContext(UserContext);
    return (
        <div className="predicts py-2 mt-3" >
            <div
                className="d-flex mt-4 col-7 col-md-5 justify-content-between"
            // style={{ color: "#65676B" }}
            >
                <div
                    className="iconParent"
                    onClick={(e) => {
                        setActive("last");
                        sortByLast();
                    }}
                    style={{ cursor: "pointer", color: `${active === "last" ? "#1876F2" : "#65676B"}` }}
                >
                    <div>Last</div>
                    {active === "last" ? (
                        <Image
                            src={rectangle.src}
                            width={72}
                            height={3}
                            style={{ position: "relative", top: "2px" }}
                        />
                    ) : (
                        ""
                    )}
                </div>
                <div
                    className="iconParent"
                    style={{ cursor: "pointer", color: `${active === "top-liked" ? "#1876F2" : "#65676B"}` }}
                    onClick={(e) => {
                        setActive("top-liked");
                        sortByLike()
                    }}
                >
                    <div>Top Liked</div>
                    {active === "top-liked" ? (
                        <Image
                            src={rectangle.src}
                            width={72}
                            height={3}
                            style={{ position: "relative", top: "2px" }}
                        />
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <hr />
            <div className="mt-3 d-flex flex-column align-items-center align-items-lg-start">
                {user.predicts.map((val, ind) => (
                    <Predict data={val} index={ind} />
                ))}
            </div>
        </div>
    );
};

export default Predicts;
