import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Main() {
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
