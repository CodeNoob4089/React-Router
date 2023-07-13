import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import Layout from "./common/Layout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { useState } from "react";

function App() {
  const inisialstate = [
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
  const [data, setData] = useState(inisialstate);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main data={data} />} />
        <Route path="/products" element={<Products data={data} />} />
        <Route path="/product/:id" element={<Product data={data} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="*"
          element={<>요청하신 페이지는 없는 페이지입니다.</>}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
