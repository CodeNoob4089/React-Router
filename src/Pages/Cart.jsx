import React from "react";
import {
  addTocart,
  incrementItem,
  decrementItem,
  removeItem,
} from "../redux/Cart";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <h2>장바구니</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        {cart &&
          cart.map((item) => {
            return (
              <div
                key={item.identifier}
                style={{
                  border: "1px solid black",
                  width: "300px",
                }}
              >
                <h2>{item.name}</h2>
                <p>개수:{item.count}</p>
                <p>선택한 옵션: {item.selectedOption}</p>
                <h3>총 금액:{item.cost * item.count}원</h3>
                <button
                  onClick={() => {
                    dispatch(incrementItem({ identifier: item.identifier }));
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    dispatch(decrementItem({ identifier: item.identifier }));
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
    </>
  );
}

export default Cart;
