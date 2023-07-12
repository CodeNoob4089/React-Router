import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import Layout from "./common/Layout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
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
