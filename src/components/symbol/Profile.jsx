import { SymbolContext } from "@/contexts/symbolContext";
import Image from "next/image";
import React, { useContext } from "react";

const Profile = () => {
    const { symbol } = useContext(SymbolContext);

    return (
        <div className="overview d-flex flex-column justify-content-center p-0">
            <div
                className="d-flex flex-column align-items-center"
                style={{ marginTop: "25px" }}
            >
                <Image src={symbol.image} width={85} height={85} alt="symbol" />
                <div style={{ fontSize: "30px", fontWeight: "400" }}>{symbol.name}</div>
            </div>
            <hr />
            <div className="px-4 des">
                <div className="title">
                    Profile
                </div>
                <hr id="bigHr" />
                <div className="mb-2 row">
                    <div className="d-flex flex-column mb-3">
                        <div className="item mb-2">Description</div>
                        <div className="" style={{ fontSize: "smaller" }}>{symbol.description}</div>
                    </div>
                    <hr />
                    <br />
                    <br />
                    <br />
                    <hr />
                    <div className="col-12 col-md-6 col-lg-12 col-xl-6 mt-3">
                        <div className="col-12">
                            <div className="mb-2">
                                <div className="d-flex justify-content-between">
                                    <div className="item">Phone</div>
                                    <div className="data">{symbol.phone}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-12 col-xl-6 mt-3">
                        <div className="col-12">
                            <div className="mb-2">
                                <div className="d-flex justify-content-between">
                                    <div className="item">Page</div>
                                    <div className="data">{symbol.page}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Profile;
