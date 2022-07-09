import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, List } from "semantic-ui-react";
import DebtList, { Debt } from "./DebtList";
import "./home.css";
import {default as data} from "../mockdata.json";
import { Button } from "semantic-ui-react";

const Home = () => {
const debts: Debt[] = data.debt; 

  const navigate = useNavigate();
  const token = localStorage.getItem("auth");
  if (!token) {
    navigate("/login");
    return <></>;
  } else {
    const logout = () => {
      console.log("Logging out");
      localStorage.clear();
      navigate("/login");
    };
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3 className="m-3">Home</h3>
          </div>
          <div>
            <button type="submit" className="buttons" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
        <div className="ind-container" style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: 50,
            paddingRight: 50,
          }}>
            <DebtList debts={debts}/>
        </div>
      </>
    );
  }
};

export default Home;
