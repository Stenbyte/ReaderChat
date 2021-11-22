import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import { AuthProvider } from "../contexts/AuthContext";
import Chat from "./Chat";

function App() {
  return (
    <div id="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
