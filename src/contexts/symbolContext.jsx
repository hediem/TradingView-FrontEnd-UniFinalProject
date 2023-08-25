import React, { useState } from "react";
import symbolPic from "../assets/images/Symbol.svg";
import userpic from "../assets/images/user.jpg";
import google from "../assets/images/Google.svg";

export const SymbolContext = React.createContext();

const SymbolContextProvider = (props) => {
  const [symbol, setSymbol] = useState({
    name: "Apple Inc.",
    image: symbolPic.src,
    price: 1509.54,
    changes: {
      //type 0=> rise , type 1 => fall
      type: 0,
      price: 5.21,
      percent: 0.35,
    },
    update: 1597642808000,
    description:
      "I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the stationstation I'm changing the stationstation I'm changing the stationstation I'm changing the stationstation I'm changing the stationstation I'm changing the station",
    phone: "1 408 996-1010",
    page: "http://www.google.com",
    follower: 1244,
    keydata: {
      symbol: "AAPL",
      country: "United State",
      exchange: "NASDAQ",
      industry: "Computers/Consumer Electronics",
      sector: "Technology",
      marketCap: "1,987.1B $",
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
        now: 11,
      },
      weeksRange: {
        min: 110.1,
        max: 116.33,
        now: 112,
      },
    },
    profitability: {
      eps: 3.29,
      pe: 35.34,
    },
    performance: {
      fiveDay: {
        type: 1,
        percent: 1.01,
      },
      oneMonth: {
        type: 0,
        percent: 12.34,
      },
      threeMonth: {
        type: 1,
        percent: 10.5,
      },
      oneYear: {
        type: 0,
        percent: 44.71,
      },
    },
    predicts: [
      {
        logo: google,
        symbolName: "Google",
        writer: "Ali Sebti",
        writerProfile: userpic,
        day: 1597988408000,
        timeDivision: "1H",
        favorite: 3,
        disLike: 1,
        target: {
          flag: true,
          up: true,
          num: 3,
        },
        permium: {
          flag: false,
          num: 0,
        },
        completed: false,
        text: "I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station",
        republish: 2,
        rank: 12333,
      },
      {
        logo: google,
        symbolName: "Google",
        writer: "Ali Sebti",
        writerProfile: userpic,
        day: 1597988408000,
        timeDivision: "1H",
        favorite: 71,
        disLike: 4,
        target: {
          flag: true,
          up: false,
          num: 20,
        },
        permium: {
          flag: false,
          num: 0,
        },
        completed: false,
        text: "I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station",
        republish: 2,
        rank: 12333,
      },
      {
        logo: google,
        symbolName: "Google",
        writer: "Ali Sebti",
        writerProfile: userpic,
        day: 1597988408000,
        timeDivision: "1H",
        favorite: 33,
        disLike: 10,
        target: {
          flag: false,
          up: true,
          num: 3,
        },
        permium: {
          flag: false,
          num: 0,
        },
        completed: false,
        text: "I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station",
        republish: 2,
        rank: 12333,
      },
      {
        logo: google,
        symbolName: "Google",
        writer: "Ali Sebti",
        writerProfile: userpic,
        day: 1597988408000,
        timeDivision: "1H",
        favorite: 15,
        disLike: 4,
        target: {
          flag: false,
          up: true,
          num: 3,
        },
        permium: {
          flag: false,
          num: 0,
        },
        completed: true,
        text: "I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station",
        republish: 2,
        rank: 12000,
      },
      {
        logo: google,
        symbolName: "Google",
        writer: "Ali Sebti",
        writerProfile: userpic,
        day: 1597988408000,
        timeDivision: "1H",
        favorite: 45,
        disLike: 2,
        target: {
          flag: false,
          up: true,
          num: 3,
        },
        permium: {
          flag: false,
          num: 0,
        },
        completed: false,
        text: "I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station",
        republish: 2,
        rank: 12333,
      },
      {
        logo: google,
        symbolName: "Google",
        writer: "Ali Sebti",
        writerProfile: userpic,
        day: 1597988408000,
        timeDivision: "1H",
        favorite: 90,
        disLike: 12,
        target: {
          flag: true,
          up: true,
          num: 30,
        },
        permium: {
          flag: false,
          num: 0,
        },
        completed: false,
        text: "I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station",
        republish: 2,
        rank: 12333,
      },
    ],
  });
  const [mainSection, setMainSection] = useState("overview");
  const [predict, setPredict] = useState();
  function sortByLikeSymbol() {
    symbol.predicts.sort((a, b) => b.favorite - a.favorite);
  }

  function sortByLastSymbol() {
    symbol.predicts.sort((a, b) => a.day - b.day);
  }

  function sortByTopUser() {
    symbol.predicts.sort((a, b) => a.rank - b.rank);
  }
  return (
    <SymbolContext.Provider
      value={{
        symbol,
        setSymbol,
        mainSection,
        setMainSection,
        predict,
        setPredict,
        sortByLikeSymbol,
        sortByLastSymbol,
        sortByTopUser,
      }}
    >
      {props.children}
    </SymbolContext.Provider>
  );
};

export default SymbolContextProvider;
