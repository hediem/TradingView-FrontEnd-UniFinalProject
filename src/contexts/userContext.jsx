import React, { useState } from "react";
import userpic from "../assets/images/user.jpg";
import google from "../assets/images/Google.svg";
import uber from "../assets/images/uber.svg";

export const UserContext = React.createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState({
    image: userpic.src,
    firstName: "Ali",
    lastName: "Sebti",
    country: "Iran",
    membershipDate: 1597642808000,
    following: 12,
    follower: 126,
    followingSymbol: 10,
    link: "https://www.facebook.com/ali.sebti.71/about",
    keyData: {
      worldRanking: 100023,
      countryRanking: 600,
      numberOfTwittes: 344,
      technicalAnalysis: 17,
      predicts: 22,
      score: 133.66,
      truePredicts: 60,
    },
    bio: "I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station",
    predicts: [
      {
        logo: google,
        symbolName: "Google",
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
      },
      {
        logo: uber,
        symbolName: "Uber",
        day: 1597992008000,
        timeDivision: "15m",
        favorite: 71,
        disLike: 4,
        target: {
          flag: true,
          up: false,
          num: 20,
        },
        permium: {
          flag: true,
          num: 5,
        },
        completed: false,
        text: "I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station",
        republish: 1,
      },
      {
        logo: google,
        symbolName: "Google",
        day: 1597995608000,
        timeDivision: "M",
        favorite: 33,
        disLike: 10,
        target: {
          flag: false,
          up: false,
          num: 0,
        },
        permium: {
          flag: false,
          num: 0,
        },
        completed: false,
        text: "I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station",
        republish: 5,
      },
      {
        logo: uber,
        symbolName: "Uber",
        day: 1597999208000,
        timeDivision: "D",
        favorite: 15,
        disLike: 4,
        completed: true,
        target: {
          flag: false,
          up: false,
          num: 0,
        },
        permium: {
          flag: true,
          num: 5,
        },
        text: "I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station",
        republish: 3,
      },
    ],
    autosave: {
      autosave: true,
      logo: google,
      symbolName: "Google",
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
    },
  });
  const [mainSection, setMainSection] = useState("timeline");
  const [predict, setPredict] = useState();
  // const [sortedByLikePredict, setSortedByLikePredict] = useState();

  function sortByLike() {
    user.predicts.sort((a, b) => b.favorite - a.favorite);
  }

  function sortByLast() {
    user.predicts.sort((a, b) => a.day - b.day);
  }
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        mainSection,
        setMainSection,
        predict,
        setPredict,
        sortByLike,
        sortByLast,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
