import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home: FC = () => {
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
            paddingLeft: 50,
            paddingRight: 50,
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
        <div className="container">
          <div
            className="row d-flex justify-content-center align-items-center text-center"
            style={{ height: "100vh" }}
          >
            <p className="muted display-6">Hello User👋</p>
          </div>
        </div>
      </>
    );
  }
};

export default Home;
