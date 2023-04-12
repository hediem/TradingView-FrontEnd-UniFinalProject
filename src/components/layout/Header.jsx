import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import plus from "../../assets/images/Plus.svg";
import bell from "../../assets/images/Bell.svg";
import arrow from "../../assets/images/Arrow.svg";
import search from "../../assets/images/Search.svg";
import rectangle from "../../assets/images/Rectangle.svg";
import { UserContext } from "../../contexts/userContext";

const Header = () => {
    const [search, useSearch] = useState();
    const [active, setActive] = useState("home");
    const { user } = useContext(UserContext);
    console.log("user", user);
    // console.log(search);

    useEffect(() => {
        console.log(active);
    }, [active]);

    const handleClick = (id) => {
        if (id === active) {
            document.getElementById(id).setAttribute("fill", "#1877F2");
        } else {
            document.getElementById(id).setAttribute("fill", "#65676B");
            setActive(id);
        }
    };

    return (
        <div className="headerPage">
            <div className="myNavbar">
                <div className="navItem">
                    <div className="lIcon"></div>
                    <input
                        type="text"
                        className="myInput"
                        onChange={(e) => useSearch(e.target.value)}
                    />
                </div>
                <div className="navItem">
                    <div
                        className="navItem-iconParent"
                    >
                        <svg
                            id="home"
                            width="29"
                            height="27"
                            viewBox="0 0 29 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="topIcon"
                            onClick={() => handleClick("home")}
                        >
                            <path
                                d="M18.5242 25.2359H22.9345C23.0944 25.2359 23.2285 25.1007 23.2285 24.9419V13.4753C23.2285 12.8261 23.7565 12.2992 24.4045 12.2992H26.5567L14.428 1.79349L2.26167 12.2992H4.41151C5.0607 12.2992 5.58757 12.8261 5.58757 13.4753V24.9419C5.58757 25.1007 5.72282 25.2359 5.88159 25.2359H10.2918V17.8855C10.2918 17.0752 10.9516 16.4155 11.7619 16.4155H17.0542C17.8645 16.4155 18.5242 17.0752 18.5242 17.8855V25.2359ZM22.9345 27H17.9362C17.287 27 16.7601 26.4731 16.7601 25.8239V18.5888C16.7601 18.363 16.5767 18.1795 16.3509 18.1795H12.4652C12.2394 18.1795 12.0559 18.363 12.0559 18.5888V25.8239C12.0559 26.4731 11.529 27 10.8798 27H5.88159C4.74551 27 3.82348 26.078 3.82348 24.9419V14.0633H1.55251C0.962126 14.0633 0.388209 13.7529 0.14006 13.2166C-0.139842 12.6121 0.00951716 11.9217 0.50111 11.4889L13.2331 0.45984C13.5236 0.181113 13.947 0.00705636 14.3951 0C14.869 0.00705636 15.2936 0.181114 15.6158 0.489241L28.3102 11.4842C28.3126 11.4866 28.3138 11.4878 28.3149 11.4889C28.8077 11.9217 28.9571 12.6121 28.6772 13.2166C28.4278 13.7529 27.8551 14.0633 27.2635 14.0633H24.9926V24.9419C24.9926 26.078 24.0717 27 22.9345 27Z"
                                fill={active === "home" ? "#1877F2" : "#65676B"}
                            />
                        </svg>
                        {active === "home" ? (
                            <Image
                                src={rectangle.src}
                                width={72}
                                height={3}
                                style={{ position: "relative", top: "4px" }}
                            />
                        ) : (
                            ""
                        )}
                    </div>
                    <div
                        className="navItem-iconParent"
                    >
                        <svg
                            id="note"
                            width="28"
                            height="27"
                            viewBox="0 0 28 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="topIcon"
                            onClick={() => handleClick("note")}
                        >
                            <path
                                d="M11.4684 30.0131C11.4684 30.687 10.9223 31.2332 10.2484 31.2332H4.88018C2.18917 31.2332 0 29.044 0 26.353V4.88018C0 2.18917 2.18917 0 4.88018 0H19.8801C22.5709 0 24.7603 2.18917 24.7603 4.88018V16.5316C24.7603 17.2055 24.2139 17.7517 23.5402 17.7517C22.8663 17.7517 22.3202 17.2055 22.3202 16.5316V4.88018C22.3202 3.5348 21.2255 2.44009 19.8801 2.44009H4.88018C3.5348 2.44009 2.44009 3.5348 2.44009 4.88018V26.353C2.44009 27.6984 3.5348 28.7931 4.88018 28.7931H10.2484C10.9223 28.7931 11.4684 29.3392 11.4684 30.0131ZM18.66 7.32028H6.09356C5.41967 7.32028 4.87351 7.86644 4.87351 8.54032C4.87351 9.21421 5.41967 9.76037 6.09356 9.76037H18.66C19.3337 9.76037 19.8801 9.21421 19.8801 8.54032C19.8801 7.86644 19.3337 7.32028 18.66 7.32028ZM19.8801 13.4205C19.8801 12.7466 19.3337 12.2005 18.66 12.2005H6.09356C5.41967 12.2005 4.87351 12.7466 4.87351 13.4205C4.87351 14.0944 5.41967 14.6406 6.09356 14.6406H18.66C19.3337 14.6406 19.8801 14.0944 19.8801 13.4205ZM6.09356 17.0806C5.41967 17.0806 4.87351 17.6268 4.87351 18.3007C4.87351 18.9746 5.41967 19.5207 6.09356 19.5207H12.5055C13.1794 19.5207 13.7255 18.9746 13.7255 18.3007C13.7255 17.6268 13.1794 17.0806 12.5055 17.0806H6.09356ZM27.7782 26.0172C27.7353 26.0785 27.5883 26.2865 27.497 26.4016C27.0884 26.9156 26.1319 28.1187 24.801 29.1808C23.0946 30.5426 21.3387 31.2332 19.5817 31.2332C17.8248 31.2332 16.0689 30.5426 14.3625 29.1808C13.0316 28.1187 12.0751 26.9154 11.6667 26.4016C11.5752 26.2865 11.4282 26.0782 11.3853 26.0172C11.0896 25.5964 11.0896 25.0353 11.3853 24.6144C11.4282 24.5534 11.5752 24.3452 11.6667 24.2301C12.0751 23.7163 13.0316 22.5132 14.3625 21.4511C16.0689 20.0893 17.8248 19.3987 19.5817 19.3987C21.3387 19.3987 23.0946 20.0893 24.801 21.4511C26.1319 22.5132 27.0884 23.7166 27.4968 24.2303C27.5883 24.3454 27.7353 24.5537 27.7782 24.6147C28.0739 25.0355 28.0739 25.5964 27.7782 26.0172ZM25.2333 25.316C23.2934 23.0081 21.3939 21.8388 19.5817 21.8388C17.7698 21.8388 15.8701 23.0079 13.9302 25.316C15.8701 27.6238 17.7695 28.7931 19.5817 28.7931C21.3939 28.7931 23.2934 27.624 25.2333 25.316ZM19.6427 22.9979C18.3624 22.9979 17.3247 24.0356 17.3247 25.316C17.3247 26.5963 18.3624 27.634 19.6427 27.634C20.9231 27.634 21.9608 26.5963 21.9608 25.316C21.9608 24.0356 20.9231 22.9979 19.6427 22.9979Z"
                                fill={active === "note" ? "#1877F2" : "#65676B"}
                            />
                        </svg>
                        {active === "note" ? (
                            <Image
                                src={rectangle.src}
                                width={72}
                                height={3}
                                style={{ position: "relative", top: "4px" }}
                            />
                        ) : (
                            ""
                        )}
                    </div>
                    <div
                        className="navItem-iconParent"
                    >
                        <svg
                            id="message"
                            width="30"
                            height="26"
                            viewBox="0 0 30 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="topIcon"
                            onClick={() => handleClick("message")}
                        >
                            <path
                                d="M23.0142 15.1723V3.31033C23.0142 1.48503 21.75 0 20.1961 0H2.81806C1.2642 0 0 1.48503 0 3.31033V15.1723C0 16.9976 1.2642 18.4827 2.81806 18.4827H5.34757L5.40152 21.4715C5.41767 22.3695 6.2955 22.8702 6.90614 22.3293L11.2497 18.4827H20.1961C21.75 18.4827 23.0142 16.9976 23.0142 15.1723ZM10.9353 16.2758C10.7312 16.2758 10.5328 16.3538 10.3698 16.4981L7.2409 19.2691L7.20638 17.3559C7.19552 16.7558 6.77827 16.2758 6.26726 16.2758H2.81806C2.30013 16.2758 1.87871 15.7808 1.87871 15.1724V3.3104C1.87871 2.70199 2.30013 2.20695 2.81806 2.20695H20.1961C20.7141 2.20695 21.1355 2.70199 21.1355 3.3104V15.1724C21.1355 15.7808 20.7141 16.2758 20.1961 16.2758L10.9353 16.2758ZM29.12 10.2068V19.3102C29.12 21.1356 27.8559 22.6206 26.3019 22.6206H23.7684L23.7184 24.9246C23.7054 25.5241 23.2871 25.9999 22.7794 25.9999C22.4046 25.9999 22.6133 26.0762 17.915 22.6206H13.6206C13.1018 22.6206 12.6813 22.1266 12.6813 21.5171C12.6813 20.9077 13.1018 20.4137 13.6206 20.4137C18.6031 20.4137 18.3703 20.3518 18.6832 20.5818L21.8823 22.9347L21.9136 21.4889C21.9267 20.8906 22.3432 20.4136 22.8527 20.4136H26.3019C26.8199 20.4136 27.2413 19.9186 27.2413 19.3102V10.2068C27.2413 9.59836 26.8199 9.10333 26.3019 9.10333C25.7831 9.10333 25.3626 8.60933 25.3626 7.99989C25.3626 7.39044 25.7831 6.89645 26.3019 6.89645C27.8559 6.89652 29.12 8.38147 29.12 10.2068ZM17.3781 7.24134C17.3781 7.85079 16.9575 8.34478 16.4387 8.34478H6.57548C6.05667 8.34478 5.63613 7.85079 5.63613 7.24134C5.63613 6.6319 6.05667 6.1379 6.57548 6.1379H16.4387C16.9575 6.1379 17.3781 6.6319 17.3781 7.24134ZM15.6755 12.0689C15.6755 12.6783 15.2549 13.1723 14.7361 13.1723H8.27806C7.75925 13.1723 7.33871 12.6783 7.33871 12.0689C7.33871 11.4595 7.75925 10.9655 8.27806 10.9655H14.7361C15.2549 10.9655 15.6755 11.4595 15.6755 12.0689Z"
                                fill={active === "message" ? "#1877F2" : "#65676B"}
                            />
                        </svg>
                        {active === "message" ? (
                            <Image
                                src={rectangle.src}
                                width={72}
                                height={3}
                                style={{ position: "relative", top: "4px" }}
                            />
                        ) : (
                            ""
                        )}
                    </div>

                    <div
                        className="navItem-iconParent"
                    >
                        <svg
                            id="chart"
                            width="27"
                            height="27"
                            viewBox="0 0 27 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="topIcon"
                            onClick={() => handleClick("chart")}
                        >
                            <path
                                d="M26.4374 25.8749H0.562516C0.252017 25.8749 0 26.1269 0 26.4374C0 26.7479 0.252017 26.9999 0.562516 26.9999H26.4375C26.748 26.9999 27 26.7479 27 26.4374C26.9999 26.1269 26.7479 25.8749 26.4374 25.8749Z"
                                fill={active === "chart" ? "#1877F2" : "#65676B"}
                            />
                            <path
                                d="M5.06247 19.125H1.68748C1.37698 19.125 1.12496 19.377 1.12496 19.6875V26.4375C1.12496 26.7479 1.37698 26.9999 1.68748 26.9999H5.06247C5.37297 26.9999 5.62499 26.7479 5.62499 26.4374V19.6874C5.62499 19.3769 5.37297 19.125 5.06247 19.125ZM4.49995 25.875H2.24999V20.25H4.50001V25.875H4.49995Z"
                                fill={active === "chart" ? "#1877F2" : "#65676B"}
                            />
                            <path
                                d="M11.8125 13.5H8.43746C8.12696 13.5 7.87495 13.752 7.87495 14.0625V26.4375C7.87495 26.748 8.12696 27 8.43746 27H11.8125C12.123 27 12.375 26.748 12.375 26.4375V14.0625C12.375 13.752 12.123 13.5 11.8125 13.5ZM11.2499 25.875H8.99993V14.6249H11.2499V25.875Z"
                                fill={active === "chart" ? "#1877F2" : "#65676B"}
                            />
                            <path
                                d="M18.5624 15.75H15.1874C14.8769 15.75 14.6249 16.002 14.6249 16.3125V26.4375C14.6249 26.748 14.8769 27 15.1874 27H18.5624C18.8729 27 19.125 26.748 19.125 26.4375V16.3125C19.125 16.0019 18.8729 15.75 18.5624 15.75ZM17.9999 25.875H15.7499V16.875H17.9999V25.875Z"
                                fill={active === "chart" ? "#1877F2" : "#65676B"}
                            />
                            <path
                                d="M25.3124 9H21.9374C21.6269 9 21.3749 9.25202 21.3749 9.56252V26.4375C21.3749 26.748 21.6269 27 21.9374 27H25.3124C25.6229 27 25.8749 26.748 25.8749 26.4375V9.56252C25.8749 9.25196 25.6229 9 25.3124 9ZM24.7499 25.875H22.4999V10.125H24.7499V25.875Z"
                                fill={active === "chart" ? "#1877F2" : "#65676B"}
                            />
                            <path
                                d="M3.37497 10.125C2.13408 10.125 1.12496 11.1341 1.12496 12.375C1.12496 13.6159 2.13408 14.625 3.37497 14.625C4.61586 14.625 5.62499 13.6159 5.62499 12.375C5.62499 11.1341 4.61586 10.125 3.37497 10.125ZM3.37497 13.5C2.75398 13.5 2.24999 12.9948 2.24999 12.375C2.24999 11.7551 2.75398 11.25 3.37497 11.25C3.99597 11.25 4.49995 11.7551 4.49995 12.375C4.49995 12.9948 3.99597 13.5 3.37497 13.5Z"
                                fill={active === "chart" ? "#1877F2" : "#65676B"}
                            />
                            <path
                                d="M10.125 4.49997C8.88407 4.49997 7.87495 5.50909 7.87495 6.74998C7.87495 7.99087 8.88407 9 10.125 9C11.3658 9 12.375 7.99087 12.375 6.74998C12.375 5.50909 11.3658 4.49997 10.125 4.49997ZM10.125 7.87496C9.50396 7.87496 8.99998 7.36982 8.99998 6.74998C8.99998 6.13009 9.50396 5.625 10.125 5.625C10.746 5.625 11.2499 6.13014 11.2499 6.74998C11.2499 7.36987 10.746 7.87496 10.125 7.87496Z"
                                fill={active === "chart" ? "#1877F2" : "#65676B"}
                            />
                            <path
                                d="M16.8749 6.75C15.6341 6.75 14.6249 7.75912 14.6249 9.00001C14.6249 10.2409 15.6341 11.25 16.8749 11.25C18.1158 11.25 19.125 10.2409 19.125 9.00001C19.125 7.75912 18.1158 6.75 16.8749 6.75ZM16.8749 10.125C16.2539 10.125 15.75 9.61985 15.75 9.00001C15.75 8.38012 16.2539 7.87503 16.8749 7.87503C17.4959 7.87503 17.9999 8.38017 17.9999 9.00001C17.9999 9.61985 17.4959 10.125 16.8749 10.125Z"
                                fill={active === "chart" ? "#1877F2" : "#65676B"}
                            />
                            <path
                                d="M23.6249 0C22.384 0 21.3749 1.00912 21.3749 2.25001C21.3749 3.4909 22.384 4.50003 23.6249 4.50003C24.8658 4.50003 25.8749 3.4909 25.8749 2.25001C25.8749 1.00912 24.8658 0 23.6249 0ZM23.6249 3.37499C23.0039 3.37499 22.4999 2.86985 22.4999 2.25001C22.4999 1.63012 23.0039 1.12503 23.6249 1.12503C24.2459 1.12503 24.7499 1.63017 24.7499 2.25001C24.7499 2.86985 24.2459 3.37499 23.6249 3.37499Z"
                                fill={active === "chart" ? "#1877F2" : "#65676B"}
                            />
                            <path
                                d="M22.8307 3.04423C22.6114 2.82486 22.2547 2.82486 22.0353 3.04423L17.6704 7.4092C17.451 7.62858 17.451 7.98522 17.6704 8.20459C17.7806 8.3137 17.9246 8.36886 18.0686 8.36886C18.2115 8.36886 18.3555 8.31486 18.4657 8.20459L22.8307 3.83962C23.0501 3.62025 23.0501 3.26361 22.8307 3.04423Z"
                                fill={active === "chart" ? "#1877F2" : "#65676B"}
                            />
                            <path
                                d="M15.5148 7.70176L11.9013 6.67128C11.5987 6.58353 11.2916 6.75903 11.2072 7.0583C11.1217 7.35756 11.295 7.66806 11.5931 7.75355L15.2066 8.78403C15.2583 8.79864 15.3101 8.80539 15.3607 8.80539C15.606 8.80539 15.8309 8.64449 15.9018 8.39701C15.9873 8.0989 15.8141 7.78724 15.5148 7.70176Z"
                                fill={active === "chart" ? "#1877F2" : "#65676B"}
                            />
                            <path
                                d="M9.24751 7.45088C9.05403 7.20788 8.70076 7.16849 8.45776 7.36086L4.2165 10.7426C3.9735 10.9373 3.933 11.2905 4.12765 11.5335C4.23902 11.6729 4.40329 11.745 4.5675 11.745C4.69011 11.745 4.81388 11.7045 4.91739 11.6235L9.15866 8.24174C9.40166 8.0471 9.44216 7.69388 9.24751 7.45088Z"
                                fill={active === "chart" ? "#1877F2" : "#65676B"}
                            />
                        </svg>
                        {active === "chart" ? (
                            <Image
                                src={rectangle.src}
                                width={72}
                                height={3}
                                style={{ position: "relative", top: "4px" }}
                            />
                        ) : (
                            ""
                        )}
                    </div>

                    <div
                        className="navItem-iconParent"
                    >
                        <svg
                            id="twitter"
                            width="34"
                            height="27"
                            viewBox="0 0 34 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="topIcon"
                            onClick={() => handleClick("twitter")}
                        >
                            <path
                                d="M10.4481 26.9998C22.9854 26.9998 29.8415 16.613 29.8415 7.6064C29.8415 7.3114 29.8354 7.01762 29.8222 6.72547C31.1529 5.76326 32.3096 4.56254 33.2222 3.19583C32.001 3.7389 30.6865 4.10399 29.308 4.26917C30.7151 3.425 31.7956 2.09019 32.3051 0.49898C30.9882 1.27975 29.5296 1.847 27.977 2.15338C26.7332 0.828519 24.9622 0 23.0014 0C19.2376 0 16.185 3.05239 16.185 6.81506C16.185 7.35021 16.2449 7.87032 16.3617 8.3693C10.6968 8.08425 5.67326 5.37217 2.31185 1.24786C1.72672 2.25496 1.38906 3.42521 1.38906 4.67388C1.38906 7.03835 2.59242 9.1263 4.42215 10.3473C3.30392 10.313 2.25354 10.006 1.33522 9.49505C1.3342 9.5237 1.3342 9.55153 1.3342 9.58201C1.3342 12.8831 3.68364 15.6393 6.80287 16.2638C6.22994 16.4196 5.62714 16.5035 5.00545 16.5035C4.56701 16.5035 4.13955 16.4605 3.72427 16.3806C4.592 19.0888 7.10844 21.0596 10.0918 21.1148C7.75878 22.9433 4.81995 24.0325 1.62595 24.0325C1.07659 24.0325 0.533519 24.001 0 23.9381C3.01664 25.8716 6.59869 27 10.4483 27"
                                fill={active === "twitter" ? "#1877F2" : "#65676B"}
                            />
                        </svg>
                        {active === "twitter" ? (
                            <Image
                                src={rectangle.src}
                                width={72}
                                height={3}
                                style={{ position: "relative", top: "4px" }}
                            />
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <div className="navItem">
                    <div className="icon pro">
                        <Image
                            src={user.image}
                            alt="user"
                            width={29}
                            height={29}
                            className="picIcon"
                        />
                        <span
                            style={{
                                position: "relative",
                                right: "5px",
                                fontWeight: "500",
                            }}
                        >
                            {user.firstName}
                        </span>
                    </div>
                    <div className="icon">
                        <Image
                            src={plus.src}
                            alt="plus"
                            width={15}
                            height={15}
                            style={{
                                top: "6px",
                                left: "12px",
                                position: "relative",
                            }}
                        />
                    </div>
                    <div className="icon">
                        <Image
                            src={bell.src}
                            alt="bell"
                            width={15}
                            height={15}
                            style={{
                                top: "7px",
                                left: "13px",
                                position: "relative",
                            }}
                        />
                    </div>
                    <div className="icon">
                        <Image
                            src={arrow.src}
                            alt="arrow"
                            width={15}
                            height={15}
                            style={{
                                top: "8px",
                                left: "12px",
                                position: "relative",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
