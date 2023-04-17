import React, { useState } from "react";
import userpic from "../assets/images/user.jpg";
import google from "../assets/images/Google.svg"
import uber from "../assets/images/uber.svg"

export const UserContext = React.createContext();

const UserContextProvider = (props) => {
    const [user, setUser] = useState({
        image: userpic.src,
        firstName: "Ali",
        lastName: "Sebti",
        country: "Iran",
        membershipDate: "Aug 17,2020",
        following: 12,
        follower: 126,
        followingSymbol: 10,
        keyData: {
            worldRanking: 100023,
            countryRanking: 600,
            numberOfTwittes: 344,
            technicalAnalysis: 17,
            predicts: 22,
        },
        bio: "I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station",
        predicts: [
            {
                logo: google,
                symbolName: "Google",
                day: "Friday, August 21,2020",
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
                day: "Friday, August 21,2020",
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
                day: "Friday, August 21,2020",
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
                day: "Friday, August 21,2020",
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
    });
    const [mainSection, setMainSection] = useState("timeline");
    const [predict, setPredict] = useState()

    return (
        <UserContext.Provider value={{ user, setUser, mainSection, setMainSection, predict, setPredict }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
