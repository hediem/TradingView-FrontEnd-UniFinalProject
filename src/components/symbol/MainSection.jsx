import React, { useState, useContext } from "react";
import searchPic from "../../assets/images/Search.svg";
import Image from "next/image";
import PersonCard from "./common/PersonCard";
import { SymbolContext } from "@/contexts/symbolContext";
import { UserContext } from "@/contexts/userContext";
import OverView from "./OverView";
import Profile from "./Profile";

const MainSection = () => {
    const [search, useSearch] = useState();
    const { user } = useContext(UserContext)
    const { symbol, mainSection } = useContext(SymbolContext);
    console.log(user);
    return (
        <div className="mainSection row">
            {mainSection === "overview" ? (
                <OverView />
            ) : mainSection === "profile" ? (
                 <Profile/>
            ) : mainSection === "follower" ? (
                Array(symbol.follower)
                    .fill(0)
                    .map((val, index) => <PersonCard user={user} className="row" />)
            ) : (
                ""
            )}
        </div>
    );
};

export default MainSection;
