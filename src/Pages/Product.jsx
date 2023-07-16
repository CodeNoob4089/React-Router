import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  addTocart,
  incrementItem,
  decrementItem,
  removeItem,
} from "../redux/Cart";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export default function Product() {
  const proucts = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);
  const [soption, setSoption] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(cart);
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
              <button
                onClick={() => {
                  if (soption === "") {
                    // 선택한 옵션이 없으면 경고 메시지를 표시하고 함수를 종료합니다.
                    alert("옵션을 선택하세요");
                    return;
                  }
                  dispatch(addTocart({ ...product, selectedOption: soption }));
                }}
                style={{
                  marginTop: "30px",
                }}
              >
                장바구니 담기
                <FontAwesomeIcon
                  icon={faCartPlus}
                  style={{ color: "#000000", fontSize: 20 }}
                />
              </button>
            </div>
          </div>
          <h2>장바구니</h2>
          <div>
            {cart &&
              cart.map((item) => {
                return (
                  <div
                    key={item.identifier}
                    style={{
                      border: "1px solid black",
                    }}
                  >
                    <h2>{item.name}</h2>
                    <p>개수:{item.count}</p>
                    <p>선택한 옵션: {item.selectedOption}</p>
                    <h3>총 금액:{item.cost * item.count}원</h3>
                    <button
                      onClick={() => {
                        dispatch(
                          incrementItem({ identifier: item.identifier })
                        );
                      }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => {
                        dispatch(
                          decrementItem({ identifier: item.identifier })
                        );
                      }}
                    >
                      -
                    </button>
                    <button
                      onClick={() => {
                        dispatch(removeItem({ identifier: item.identifier }));
                      }}
                    >
                      삭제하기
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
}
