import MainSection from "@/components/user-profile/home/user/MainSection";
import SideBar from "@/components/user-profile/home/user/SideBar";
import React from "react";

const Home = () => {
    return (
        <div className="row justify-content-center" style={{ padding: "0px" }} >
            <div className="col-12 col-sm-10 col-md-8 col-lg-4 mt-2">
                <SideBar />
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 mt-2" style={{ backgroundColor: "#ffffff", borderRadius: "7px", height: "90vh" }}>
                <MainSection />
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-2 mt-2"></div>
        </div >
    );
};

export default Home
