import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <Link
            to="/products/1"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#068FFF",
                padding: "5px",
              }}
            >
              <h2>멋진 바지</h2>
              <p>20000원</p>
            </div>
          </Link>
          <Link
            to="/products/2"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <div
              style={{
                width: "200px",
                height: "240px",
                padding: "5px",
                backgroundColor: "#068FFF",
              }}
            >
              <h2>멋진 셔츠</h2>
              <p>10000원</p>
            </div>
          </Link>
          <Link
            to="/products/3"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#068FFF",
                padding: "5px",
              }}
            >
              <h2>멋진 신발</h2>
              <p>30000원</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
