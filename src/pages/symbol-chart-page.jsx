import React, { useContext } from "react";
import Predicts from "../components/chart/common/Predicts";
import Message from "../components/chart/user/Message";
import TradingViewWidget from "../components/chart/common/TradingViewWidget";
import { UserContext } from "@/contexts/userContext";
// import Details from "@/components/user/home/Details";

const chartPage = () => {
  const { predict, user } = useContext(UserContext);
  return (
    <div className="row chart justify-content-center justify-content-lg-start">
      <div
        className="col-12 col-sm-10 col-md-8 col-lg-3 p-0"
        style={{ marginTop: "-0.5rem", maxWidth: "404px" }}
      >
        {/* <Details user={user} /> */}
        <Predicts symbolFlag={true} />
      </div>
      <div
        className="col-12 col-sm-10 col-md-8 col-xxl-9 mt-2"
        style={{ height: "90vh" }}
      >
        {predict ? (
          <>
            <div>
              <Message symbolFlag={true} />
            </div>
            <div className="mt-2">
              <TradingViewWidget />
            </div>
          </>
        ) : (
          <div
            className="ms-2"
            style={{
              backgroundColor: "#ffffff",
              padding: "25px 20px",
              borderRadius: "8px",
            }}
          >
            Select...
          </div>
        )}
      </div>
    </div>
  );
};

export default chartPage;
