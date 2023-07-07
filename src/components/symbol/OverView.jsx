import { SymbolContext } from "@/contexts/symbolContext";
import Image from "next/image";
import React, { useContext } from "react";

const OverView = () => {
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
            <div className="px-4 des row">
                <div className="col-12 col-md-6 col-lg-12 col-xl-6 mt-3">
                    <div className="col-12">
                        <div className="title">Key Data</div>
                        <hr id="bigHr" />
                        <div className="mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="item">Symbol</div>
                                <div className="data">{symbol.keydata.symbol}</div>
                            </div>
                            <hr />
                        </div>
                        <div className="mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="item">Country</div>
                                <div className="data">{symbol.keydata.country}</div>
                            </div>
                            <hr />
                        </div>
                        <div className="mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="item">Exchange</div>
                                <div className="data">{symbol.keydata.exchange}</div>
                            </div>
                            <hr />
                        </div>
                        <div className="mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="item">Industry</div>
                                <div className="data">{symbol.keydata.industry}</div>
                            </div>
                            <hr />
                        </div>
                        <div className="mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="item">Sector</div>
                                <div className="data">{symbol.keydata.sector}</div>
                            </div>
                            <hr />
                        </div>
                        <div className="mb-4">
                            <div className="d-flex justify-content-between">
                                <div className="item">Market Cap</div>
                                <div className="data">{symbol.keydata.marketCap}</div>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="title d-flex justify-content-between">
                            <span>Live Trading’s states</span>
                            <span
                                style={{
                                    color: "#149817",
                                    border: "1px solid #149817",
                                    borderRadius: "4px",
                                    padding: "1px 3px ",
                                }}
                            >
                                OPEN
                            </span>
                        </div>
                        <hr id="bigHr" />
                        <div className="mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="item">Previous Close</div>
                                <div className="data">
                                    {symbol.liveTradingStats.previousClose}
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="item">Open</div>
                                <div className="data" style={{ color: symbol.liveTradingStats.open > symbol.liveTradingStats.previousClose ? "#149817" : "#CA0813" }}>{symbol.liveTradingStats.open}</div>
                            </div>
                            <hr />
                        </div>
                        <div className="mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="item">Last</div>
                                <div className="data">{symbol.liveTradingStats.last}</div>
                            </div>
                            <hr />
                        </div>
                        <div className="mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="item">Change</div>

                                <div
                                    className="data"
                                    style={{
                                        color:
                                            symbol.liveTradingStats.change.type === 1
                                                ? "#CA0813"
                                                : "#149817",
                                    }}
                                >
                                    {symbol.liveTradingStats.change.type === 1 ? <span>-</span> : ""}{symbol.liveTradingStats.change.price}
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="item">% Change</div>
                                <div
                                    className="data"
                                    style={{
                                        color:
                                            symbol.liveTradingStats.change.type === 1
                                                ? "#CA0813"
                                                : "#149817",
                                    }}
                                >
                                    {symbol.liveTradingStats.change.type === 1 ? <span>-</span> : ""}{symbol.liveTradingStats.change.percent}%
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div className="mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="item">Volume</div>
                                <div className="data">{symbol.liveTradingStats.volume}</div>
                            </div>
                            <hr />
                        </div>
                        <div className="mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="item">Average Volume (3 Month)</div>
                                <div className="data">{symbol.liveTradingStats.AvgVolume}</div>
                            </div>
                            <hr />
                        </div>
                        <div className="mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="item">Day Range</div>
                                <div className="data">{symbol.keydata.symbol}</div>
                            </div>
                            <hr />
                        </div>
                        <div className="mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="item">52 Week Range</div>
                                <div className="data">{symbol.keydata.symbol}</div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-12 col-xl-6 mt-3">
                    <div className="col-12">
                        <div className="title">Profitability</div>
                        <hr id="bigHr" />
                        <div className="mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="item">EPS</div>
                                <div className="data">{symbol.profitability.eps}</div>
                            </div>
                            <hr />
                        </div>
                        <div className="mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="item">P/E</div>
                                <div className="data">{symbol.profitability.pe}</div>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="title">Performance</div>
                        <hr id="bigHr" />
                        <div className="mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="item">5 Day</div>
                                <div className="data">{symbol.keydata.symbol}</div>
                            </div>
                            <hr />
                        </div>
                        <div className="mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="item">1 Month</div>
                                <div className="data">{symbol.keydata.symbol}</div>
                            </div>
                            <hr />
                        </div>
                        <div className="mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="item">3 Month</div>
                                <div className="data">{symbol.keydata.symbol}</div>
                            </div>
                            <hr />
                        </div>
                        <div className="mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="item">1 Year</div>
                                <div className="data">{symbol.keydata.symbol}</div>
                            </div>
                            <hr />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverView;
