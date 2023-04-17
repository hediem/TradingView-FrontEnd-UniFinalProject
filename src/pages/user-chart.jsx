import React, { useContext } from "react";
import Predicts from "../components/user/chart/Predicts";
import Message from "../components/user/chart/Message";
import TradingViewWidget from "../components/user/chart/TradingViewWidget";
import { UserContext } from "@/contexts/userContext";

const chartPage = () => {
    const { predict } = useContext(UserContext);
    return (
        <div className="row chart justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-4 mt-1 p-0">
                <Predicts />
            </div>
            <div className="col-12 col-sm-10 col-md-8 mt-1">
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
                    <div className="mt-3 ms-2" style={{
                        backgroundColor: "#ffffff",
                        padding: "25px 20px",
                        borderRadius: "8px",
                    }}>Select...</div>
                )}
            </div>
        </div>
    );
};

export default chartPage;
