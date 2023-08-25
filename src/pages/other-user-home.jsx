import MainSection from "@/components/user-profile/home/other-user/MainSection";
import SideBar from "@/components/user-profile/home/other-user/SideBar";
import { UserContext } from "@/contexts/userContext";
import React, { useContext, useEffect } from "react";

const Home = () => {
  const { setMainSection } = useContext(UserContext);
  useEffect(() => {
    setMainSection("about");
  }, []);
  return (
    <div
      className="row justify-content-center justify-content-lg-start"
      style={{ padding: "0px" }}
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
          height: "90vh",
          maxWidth: "670px",
        }}
      >
        <MainSection />
      </div>
      <div className="col-12 col-sm-10 col-md-8 col-lg-2 col-xl-3 mt-2"></div>
    </div>
  );
};

export default Home;
