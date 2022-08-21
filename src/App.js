import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}
