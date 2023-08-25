import React, { useContext } from "react";
import Predicts from "../components/chart/common/Predicts";
import Message from "../components/chart/other-user/Message";
import TradingViewWidget from "../components/chart/common/TradingViewWidget";
import { UserContext } from "@/contexts/userContext";
import Details from "@/components/user-profile/home/common/Details";

const OtherChartPage = () => {
  const { predict, user } = useContext(UserContext);
  return (
    <div className="row chart justify-content-center justify-content-lg-start">
      <div
        className="col-12 col-sm-10 col-md-8 col-lg-4 col-xxl-3 mt-2 p-0"
        style={{ maxWidth: "401px" }}
      >
        <Details user={user} />
        <Predicts />
      </div>
      <div
        className="col-12 col-sm-10 col-md-8 col-xxl-9 mt-2"
        style={{ height: "90vh" }}
      >
        {predict ? (
          <>
            <div>
              <Message />
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

export default OtherChartPage;
