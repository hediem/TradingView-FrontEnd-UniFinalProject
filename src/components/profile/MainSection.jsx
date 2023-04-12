import React, { useState, useContext } from "react";
import { UserContext } from "@/contexts/userContext";
import searchPic from "../../assets/images/Search.svg";
import Image from "next/image";
import PersonCard from "./PersonCard";

const MainSection = () => {
    const [search, useSearch] = useState();
    const { user } = useContext(UserContext);

    return (
        <div className="mainSection row">
            <div className="d-flex my-3" style={{ alignItems: "center" }}>
                <input
                    type="text"
                    className="myInput col-11"
                    onChange={(e) => useSearch(e.target.value)}
                />
                <Image src={searchPic.src} width={21} height={21} className="col-1" />
            </div>
            <hr />
            {Array(6)
                .fill(0)
                .map((val, index) => (

                    <PersonCard user={user} className="row" />

                ))}
        </div>
    );
};

export default MainSection;
