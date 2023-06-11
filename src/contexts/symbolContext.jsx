import React, { useState } from "react";
import userpic from "../assets/images/user.jpg";
import google from "../assets/images/Google.svg"
import uber from "../assets/images/uber.svg"

export const SymbolContext = React.createContext();

const SymbolContextProvider = (props) => {
    const [symbol, setSymbol] = useState({
        name: "Apple Inc.",
        price: 1509.54,
        changes: {
            //type 0=> rise , type 1 => fall
            type: "0",
            price: 5.21,
            percent: 0.35,
        },
        update: 1597642808000,
        description: "I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the stationstation I'm changing the stationstation I'm changing the stationstation I'm changing the stationstation I'm changing the stationstation I'm changing the station",
        phone: "1 408 996-1010",
        page: "http://www.google.com",
        follower: 1244,
        keydata: {
            symbol: "AAPL",
            country: "United State",
            exchange: "NASDAQ",
            industry: "Computers/Consumer Electronics",
            sector: "Technology",
            marketCap: "1,987.1B $"
        },
        liveTradingStats: {
            previousClose: 115.08,
            open: 116.25,
            last: 114.1,
            change: {
                type: 1,
                price: 13.1,
                percent: 1.07,
            },
            volume: "52.98M",
            AvgVolume: "72.98M",
            dayRange: {
                min: 110.1,
                max: 116.33,
                now: 11
            },
            weeksRange: {
                min: 110.1,
                max: 116.33,
                now: 112
            }
        },
        profitability: {
            eps: 3.29,
            pe: 35.34
        },
        performance: {
            fiveDay: {
                type: 1,
                percent: 1.01
            },
            oneMonth: {
                type: 0,
                percent: 12.34
            },
            threeMonth: {
                type: 1,
                percent: 10.5
            },
            oneYear: {
                type: 0,
                percent: 44.71
            }
        }
    })
    const [mainSection, setMainSection] = useState("overview");
    const [predict, setPredict] = useState()

    return (
        <SymbolContext.Provider value={{ symbol, setSymbol, mainSection, setMainSection, predict, setPredict }}>
            {props.children}
        </SymbolContext.Provider>
    );
};

export default SymbolContextProvider;
