import React, { useState } from "react";
import userpic from "../assets/images/user.jpg";

export const UserContext = React.createContext();

const UserContextProvider = (props) => {
    const [user, setUser] = useState({
        image: userpic.src,
        firstName: "Ali",
        lastName: "Sebti",
        country: "Iran",
        membershipDate: "Aug 17,2020",
        following: "12",
        follower: "126",
        followingSymbol: "10",
        keyData: {
            worldRanking: "100023",
            countryRanking: "600",
            numberOfTwittes: "344",
            technicalAnalysis: "17",
            predicts: "22",
        },
        bio: "I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station",
        predicts: [
            {
                logo: "",
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
                //something
            },
            {
                logo: "",
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
                //something
            },
            {
                logo: "",
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
                //something
            },
            {
                logo: "",
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
                    flag: false,
                    num: 0,
                },
                text: "I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station I'm changing the station",
                //something
            },
        ],
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
