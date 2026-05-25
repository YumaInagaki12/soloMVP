import "./App.css";
import React, { useState } from "react";
import Top from "./components/Top";
import AddPet from "./components/AddPet";
import MyPet from "./components/MyPet";
import PetHealth from "./components/PetHealth";

function App() {
  const [screen, setScreen] = useState("top"); //screenで画面遷移の管理
  const [pets, setPets] = useState([]); //petを配列で管理
  const [healthLogs, setHealthLogs] = useState([]); //健康に関する情報を配列で管理
  const [currentId, setCurrentId] = useState(null); //petのindexを管理

  if (screen === "top") {
    return (
      <Top pets={pets} setScreen={setScreen} setCurrentId={setCurrentId} />
    );
  }

  if (screen === "addpet") {
    return <AddPet pets={pets} setPets={setPets} setScreen={setScreen} />;
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
    return (
      <PetHealth
        healthLogs={healthLogs}
        setHealthLogs={setHealthLogs}
        currentId={currentId}
        setScreen={setScreen}
      />
    );
  }

  return null;
}

export default App;
