import MainSection from "@/components/user-profile/home/user/MainSection";
import SideBar from "@/components/user-profile/home/user/SideBar";
import React from "react";

const Home = () => {
  return (
    <div
      className="row justify-content-center justify-content-lg-start"
      style={{ padding: "0px", minHeight: "90vh" }}
    >
      <div
        className="col-12 col-sm-10 col-md-8 col-lg-4 mt-2"
        style={{ maxWidth: "404px" }}
      >
        <SideBar />
      </div>
      <div
        className="col-12 col-sm-10 col-md-8 col-lg-6 mt-2 main-section-parent"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "7px",
          minHeight: "90vh",
          maxWidth: "670px",
        }}
      >
        <MainSection />
      </div>
      <div className="col-12 col-sm-10 col-md-8 col-lg-2 mt-2"></div>
    </div>
  );
};

export default Home;
