import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Main() {
  const products = useSelector((state) => state.product);
  const Navigate = useNavigate();
  return (
    <>
      <main>
        <section
          style={{
            backgroundColor: "#4E4FEB",
            color: "white",
            height: "300px",
            lineHeight: "300px",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          케러셀
        </section>
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2
            onClick={() => {
              Navigate("/Products");
            }}
          >
            🔥 여름 추천템 🔥
          </h2>
          <Link to="/Products" style={{ textDecoration: "none" }}>
            더보기
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {products.map((item) => (
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
        </section>
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2>🔥 세일 상품 🔥</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품1
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품2
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품3
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
