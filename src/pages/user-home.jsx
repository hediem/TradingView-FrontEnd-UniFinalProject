import MainSection from "@/components/User/home/MainSection";
import SideBar from "@/components/User/home/SideBar";
import React from "react";

const Home = () => {
    return (
        <div className="row justify-content-center" style={{ padding: "0px" }} >
            <div className="col-12 col-sm-10 col-md-8 col-lg-4 mt-2">
                <SideBar />
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 mt-2" style={{ backgroundColor: "#ffffff", borderRadius: "7px" }}>
                <MainSection />
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-2 mt-2"></div>
        </div >
    );
};

export default Home
