import React from "react";
import MainSection from "@/components/symbol/MainSection";
import SideBar from "@/components/symbol/SideBar";

const SymbolHome = () => {
    return (
        <div className="row justify-content-center" style={{ padding: "0px" }} >
            <div className="col-12 col-sm-10 col-lg-4 mt-2">
                <SideBar />
            </div>
            <div className="col-12 col-sm-10 col-lg-6 mt-2 p-0" style={{ backgroundColor: "#ffffff", borderRadius: "7px", height: "90vh" }}>
                <MainSection />
            </div>
            <div className="col-12 col-sm-10 col-lg-2 mt-2"></div>
        </div >
    );
};

export default SymbolHome
