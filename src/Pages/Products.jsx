import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sortdata, reset } from "../redux/products";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  return (
    <>
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
        <button
          onClick={() => {
            dispatch(sortdata());
          }}
        >
          가격순 정렬
        </button>
        <button
          onClick={() => {
            dispatch(reset());
          }}
        >
          리셋
        </button>
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
      </div>
    </>
  );
}
