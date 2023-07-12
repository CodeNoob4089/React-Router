import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const inisialstate = [
    //화면에 뿌려줄 기본 데이터
    {
      id: 1,
      name: "멋진 바지",
      cost: "20000",
      like: "100",
      options: ["28", "30", "32"],
    },
    {
      id: 2,
      name: "멋진 셔츠",
      cost: "10000",
      like: "200",
      options: ["small", "medium", "large"],
    },
    {
      id: 3,
      name: "멋진 신발",
      cost: "30000",
      like: "300",
      options: ["230", "240", "250", "260", "270"],
    },
  ];

  const [alldata, setAllData] = useState([]);

  useEffect(() => {
    //아이디 값에 맞춰 데이터를 필터링하고 상태를 업데이트하기위해 사용
    const fetchData = async () => {
      const data = inisialstate.filter((item) => item.id === Number(id)); //일치연산자이기 때문에 item.id 와 useParams에서 가져온 id값을 똑같이 숫자형태로 해주기위해 Number사용
      setAllData(data); //필터링된 data로 state를 변경
    };
    fetchData();
  }, [id]); //의존성배열로 id값이 변경될때 렌더링된다.

  return (
    <>
      {alldata.map((item) => (
        <div key={item.id}>
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
              {item.name}
            </div>
            <div>
              <h3>가격: {item.cost}</h3>
              <h3>좋아요: {item.like}</h3>
              <h3>구매옵션</h3>
              <select
                style={{
                  width: "100px",
                  backgroundColor: "#eee",
                  borderRadius: "10px",
                }}
              >
                {item.options.map((option) => (
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
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
