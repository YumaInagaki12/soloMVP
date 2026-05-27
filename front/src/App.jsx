import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Top from "./components/Top";
import AddPet from "./components/AddPet";
import MyPet from "./components/MyPet";
import PetHealth from "./components/PetHealth";

function AppContent({
  pets,
  setPets,
  healthLogs,
  setHealthLogs,
  currentId,
  setCurrentId,
}) {
  const location = useLocation();

  const fetchPets = () => {
    fetch("http://localhost:3000/api/pets")
      .then((res) => res.json())
      .then((result) => {
        if (result.ok) {
          setPets(result.data);
        }
      })
      .catch((err) => console.error("api/petsでペット一覧の取得に失敗", err));
  };

  const fetchHealthLogs = () => {
    if (currentId !== null) {
      fetch(`http://localhost:3000/api/health-logs/${currentId}`)
        .then((res) => res.json())
        .then((result) => {
          if (result.ok) {
            setHealthLogs(result.data);
          }
        })
        .catch((err) =>
          console.error("api/health_logs/currentIdで健康ログの取得に失敗", err),
        );
    }
  };

  useEffect(() => {
    fetchPets();
  }, [location.pathname]);

  useEffect(() => {
    fetchHealthLogs();
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/top" replace />} />
      <Route
        path="/top"
        element={<Top pets={pets} setCurrentId={setCurrentId} />}
      />
      <Route path="/top/addpet" element={<AddPet />} />
      <Route
        path="/top/pet"
        element={
          <MyPet pets={pets} healthLogs={healthLogs} currentId={currentId} />
        }
      />
      <Route path="/top/health" element={<PetHealth currentId={currentId} />} />
    </Routes>
  );
}

function App() {
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

export default App;
