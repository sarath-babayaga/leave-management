import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Leave from "./pages/Leave";
import {GlobalProvider} from './pages/GlobalState'

function App() {
  return (
    <GlobalProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/leave" element={<Leave />} />
      </Routes>
    </Router>
    </GlobalProvider>
  );
}

export default App;
