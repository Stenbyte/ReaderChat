import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <div id="App">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
