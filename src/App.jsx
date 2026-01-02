import React from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Match from "./pages/Match";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/match" element={<Match />} />
      </Routes>
    </div>
  );
}
