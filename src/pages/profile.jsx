import MainSection from "@/components/profile/MainSection";
import SideBar from "@/components/profile/SideBar";
import React from "react";

const Profile = () => {
    return (
        <div className="row" style={{ width: "100vw", padding: "0px" }} >
            <div className="col-3 mt-1">
                <SideBar />
            </div>
            <div className="col-6 mt-1" style={{ backgroundColor: "#ffffff" }}>
                <MainSection />
            </div>
            <div className="col-3 mt-1"></div>
        </div >
    );
};

export default Profile
