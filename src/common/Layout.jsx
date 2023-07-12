import React from "react";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        paddingBottom: "90px",
        boxSizing: "border-box",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#000000",
          color: "white",
        }}
      >
        <Link to="/">
          <FontAwesomeIcon
            icon={faHouse}
            style={{ color: "#ffffff", fontSize: 30 }}
          />
        </Link>

        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            로그인
          </Link>
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            회원가입
          </Link>
        </div>
      </header>
      <Outlet />
      <footer
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          padding: "24px",
          backgroundColor: "#EEEEEE",
          color: "black",
          position: "absolute",
          bottom: 0,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div>문의하기</div>
        <div>SNS 채널들</div>
      </footer>
    </div>
  );
}

export default Layout;
