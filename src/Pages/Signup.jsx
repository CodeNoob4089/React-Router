import React from "react";

function Signup() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#c2dcee",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "800px",
          height: "80vh",
          margin: "20px 0 50px",
        }}
      >
        <input
          type="text"
          placeholder="아이디"
          style={{
            backgroundColor: "#eee",
            border: "none",
            padding: "12px 15px",
            margin: "8px 0",
            width: "65%",
          }}
        />
        <input
          type="email"
          placeholder="이메일"
          style={{
            backgroundColor: "#eee",
            border: "none",
            padding: "12px 15px",
            margin: "8px 0",
            width: "65%",
          }}
        />
        <input
          type="password"
          placeholder="비밀번호"
          style={{
            backgroundColor: "#eee",
            border: "none",
            padding: "12px 15px",
            margin: "8px 0",
            width: "65%",
          }}
        />
        <button
          style={{
            borderRadius: "20px",
            border: "1px solid #FF4B2B",
            color: "#FF4B2B",
            fontsize: "12px",
            fontweight: "bold",
            padding: "12px 45px",
            letterspacing: "1px",
          }}
        >
          회원가입
        </button>
      </div>
    </form>
  );
}

export default Signup;
