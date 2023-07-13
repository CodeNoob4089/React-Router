import React from "react";
import { Link } from "react-router-dom";

export default function Products({ data }) {
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
          {data.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
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
                <h2>{item.name}</h2>
                <p>{item.cost}원</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
