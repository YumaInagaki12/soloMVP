import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppContent from "./AppContent";
import "./App.css";

export default function App() {
  const [pets, setPets] = useState([]);
  const [healthLogs, setHealthLogs] = useState([]);
  const [currentId, setCurrentId] = useState(null);

  return (
    <Router>
      <AppContent
        pets={pets}
        setPets={setPets}
        healthLogs={healthLogs}
        setHealthLogs={setHealthLogs}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
    </Router>
  );
}
