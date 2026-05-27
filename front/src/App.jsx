import "./App.css";
import React, { useState, useEffect } from "react";
import Top from "./components/Top";
import AddPet from "./components/AddPet";
import MyPet from "./components/MyPet";
import PetHealth from "./components/PetHealth";

function App() {
  const [screen, setScreen] = useState("top");
  const [pets, setPets] = useState([]);
  const [healthLogs, setHealthLogs] = useState([]);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/pets")
      .then((res) => res.json())
      .then((result) => {
        if (result.ok) {
          setPets(result.data);
        }
      })
      .catch((err) => console.error("api/petsでペット一覧の取得に失敗", err));
  }, [screen]);

  useEffect(() => {
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
  }, [currentId, screen]);

  if (screen === "top") {
    return (
      <Top pets={pets} setScreen={setScreen} setCurrentId={setCurrentId} />
    );
  }

  if (screen === "addpet") {
    return <AddPet setScreen={setScreen} />;
  }

  if (screen === "pet") {
    return (
      <MyPet
        pets={pets}
        healthLogs={healthLogs}
        currentId={currentId}
        setScreen={setScreen}
      />
    );
  }

  if (screen === "health") {
    return <PetHealth currentId={currentId} setScreen={setScreen} />;
  }
}

export default App;
