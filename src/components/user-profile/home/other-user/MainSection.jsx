import React, { useState, useContext } from "react";
import { UserContext } from "@/contexts/userContext";
import PersonCard from "../common/PersonCard";
import About from "./About";

const MainSection = () => {
    const { user, mainSection } = useContext(UserContext);
    return (
        <div className="mainSection row">
            {mainSection === "about" ? (
                <About user={user} />
            ) : mainSection === "follower" ? (
                Array(user.follower)
                    .fill(0)
                    .map((val, index) => <PersonCard user={user} className="row" />)
            ) : mainSection === "following-user" ? (
                Array(user.following)
                    .fill(0)
                    .map((val, index) => <PersonCard user={user} className="row" />)
            ) : mainSection === "following-symbol" ? (
                <div>following Symbol</div>
            ) : (
                "Select..."
            )}
        </div>
    );
};

export default MainSection;
