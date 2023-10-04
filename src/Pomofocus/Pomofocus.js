import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Timer from './Pages/Timer'

export default function Pomofocus() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Timer />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
