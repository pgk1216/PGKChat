import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "../contexts/AuthContext";

import Chat from "./Chat";
import Login from "./Login";

function App() {
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" Component={Login} />
            <Route path="/chat" Component={Chat} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
