import React, { useContext, useState } from "react";
import Image from "next/image";
import { UserContext } from "@/contexts/userContext";

import rectangle from "../../../assets/images/Rectangle.svg";
import pencil from "../../../assets/images/Pencil.svg";
import Predict from "./Predict";
import { SymbolContext } from "@/contexts/symbolContext";
import SymbolPredict from "./SymbolPredict";
import MyChart from "./MyChart";
const Predicts = ({ symbolFlag }) => {
  const [active, setActive] = useState("last");
  const { user, sortByLike, sortByLast } = useContext(UserContext);
  const { symbol, sortByLikeSymbol, sortByLastSymbol, sortByTopUser } =
    useContext(SymbolContext);
  return (
    <div className="predicts py-2 mt-3">
      <div
        className={`d-flex ${
          symbolFlag ? "col-12" : " mt-2 col-7 col-md-5"
        } justify-content-between`}
        // style={{ color: "#65676B" }}
      >
        <div
          className="iconParent"
          onClick={(e) => {
            setActive("last");
            if (symbolFlag) {
              sortByLastSymbol();
            } else {
              sortByLast();
            }
          }}
          style={{
            cursor: "pointer",
            color: `${active === "last" ? "#1876F2" : "#65676B"}`,
          }}
        >
          <div className="p-1">Last</div>
          {active === "last" ? (
            <Image
              src={rectangle.src}
              width={65}
              height={3}
              style={{ position: "relative", top: "2px" }}
            />
          ) : (
            ""
          )}
        </div>
        {symbolFlag ? (
          <div
            className="iconParent"
            style={{
              cursor: "pointer",
              color: `${active === "top-user" ? "#1876F2" : "#65676B"}`,
            }}
            onClick={(e) => {
              setActive("top-user");
              sortByTopUser();
            }}
          >
            <div className="p-1">Top User</div>
            {active === "top-user" ? (
              <Image
                src={rectangle.src}
                width={65}
                height={3}
                style={{ position: "relative", top: "2px" }}
              />
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
        <div
          className="iconParent"
          style={{
            cursor: "pointer",
            color: `${active === "top-liked" ? "#1876F2" : "#65676B"}`,
          }}
          onClick={(e) => {
            setActive("top-liked");
            if (symbolFlag) {
              sortByLikeSymbol();
            } else {
              sortByLike();
            }
          }}
        >
          <div className="p-1">Top Liked</div>
          {active === "top-liked" ? (
            <Image
              src={rectangle.src}
              width={65}
              height={3}
              style={{ position: "relative", top: "2px" }}
            />
          ) : (
            ""
          )}
        </div>
        {symbolFlag ? (
          <div
            // className="iconParent"
            style={{
              cursor: "pointer",
              height: "inherit",
              fontSize: "15px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "50%",
              // color: `${active === "my-chart" ? "#1876F2" : "#65676B"}`,
            }}
            onClick={(e) => {
              setActive("my-chart");
              sortByLike();
            }}
          >
            <div
              className="d-flex flex-row align-items-center p-1"
              style={{
                gap: "5px",
                backgroundColor: "#E4E6EB",
                borderRadius: "7px",
              }}
            >
              <Image src={pencil} alt="pencil" width={16} height={16} />
              <div>My Chart</div>
            </div>
            {active === "my-chart" ? (
              <Image
                src={rectangle.src}
                width={65}
                height={3}
                style={{ position: "relative", top: "2px" }}
              />
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      <hr />
      <div className="mt-3 d-flex flex-column align-items-center align-items-lg-start">
        {active !== "my-chart" ? (
          symbolFlag ? (
            symbol.predicts.map((val, ind) => (
              <SymbolPredict data={val} index={ind} />
            ))
          ) : (
            user.predicts.map((val, ind) => <Predict data={val} index={ind} />)
          )
        ) : (
          <>
            <MyChart data={user.autosave} autosave={true} />
            {user.predicts.map((val, ind) => (
              <MyChart data={val} index={ind} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Predicts;
