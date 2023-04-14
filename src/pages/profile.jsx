import MainSection from "@/components/profile/MainSection";
import SideBar from "@/components/profile/SideBar";
import React from "react";

const Profile = () => {
    return (
        <div className="row justify-content-center" style={{ width: "100vw", padding: "0px" }} >
            <div className="col-12 col-sm-10 col-md-8 col-lg-4 mt-1">
                <SideBar />
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 mt-1" style={{ backgroundColor: "#ffffff", borderRadius: "7px" }}>
                <MainSection />
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-2 mt-1"></div>
        </div >
    );
};

export default Profile
