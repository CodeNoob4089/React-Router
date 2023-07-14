import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Product() {
  const proucts = useSelector((state) => state.product);
  const [soption, setSoption] = useState("");
  const { id } = useParams();
  const product = proucts.find((item) => item.id === parseInt(id));
  // find를 이용해 조건에맞는 배열내 특정 객체를 찾음
  // parseInt를 통해 id값의 숫자만 가져오고 data의 아이디와 일치여부를 판단 일치하면 데이터를 가져오고 아닐경우 undefined한다.
  return (
    <>
      {product && (
        <div>
          <div
            style={{
              margin: "50px",
              display: "flex",
              gap: "44px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                textAlign: "center",
                width: "200px",
                height: "240px",
                backgroundColor: "#068FFF",
                color: "#ffffff",
              }}
            >
              {product.name}
            </div>
            <div>
              <h3>가격: {product.cost}</h3>
              <h3>좋아요: {product.like}</h3>
              <h3>구매옵션</h3>
              <select
                style={{
                  width: "100px",
                  backgroundColor: "#eee",
                  borderRadius: "10px",
                }}
                onChange={(e) => {
                  setSoption(e.target.value);
                }}
              >
                <option value={""}>선택하세요</option>
                {product.options.map((option) => (
                  <option
                    key={option}
                    style={{
                      backgroundColor: "#eee",
                      borderRadius: "20px",
                    }}
                  >
                    {option}
                  </option>
                ))}
              </select>
              <div>{soption}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
