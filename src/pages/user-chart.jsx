import React, { useContext } from "react";
import Predicts from "../components/user/chart/Predicts";
import Message from "../components/user/chart/Message";
import TradingViewWidget from "../components/user/chart/TradingViewWidget";
import { UserContext } from "@/contexts/userContext";
import Details from "@/components/user/home/Details";

const chartPage = () => {
    const { predict, user } = useContext(UserContext);
    return (
        <div className="row chart justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-4 col-xxl-3 mt-2 p-0">
                <Details user={user} />
                <Predicts />
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-xxl-9 mt-2">
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
                    <div className="ms-2" style={{
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
