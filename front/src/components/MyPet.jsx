import React from "react";
import PetProfile from "./PetProfile.jsx";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function MyPet({ pets, healthLogs, currentId }) {
  const navigate = useNavigate();

  const currentPet = pets.find((pet) => Number(pet.id) === Number(currentId));

  const myLogs = healthLogs
    .filter((log) => Number(log.pet_id) === Number(currentId))
    .map((log) => {
      let foodScore = 3;
      if (log.food === "半分残した") foodScore = 2;
      if (log.food === "全く食べない") foodScore = 1;

      let waterScore = 2;
      if (log.water === "異常に多い") waterScore = 3;
      if (log.water === "少ない") waterScore = 1;

      let poopScore = 3;
      if (log.poop === "下痢気味") poopScore = 2;
      if (log.poop === "出ない") poopScore = 1;

      return {
        ...log,
        foodValue: foodScore,
        waterValue: waterScore,
        poopValue: poopScore,
      };
    });

  return (
    <div>
      <PetProfile pet={currentPet} />
      <button className="healthButton" onClick={() => navigate("/top/health")}>
        健康管理
      </button>
      <div>
        <h3>体重の推移</h3>
        <div>
          <div>
            <p>体重 (kg)</p>
            <LineChart width={300} height={150} data={myLogs}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="weight" className="weight-line" />
            </LineChart>
          </div>
          <div>
            <p>ごはんの食べる量</p>
            <LineChart width={300} height={150} data={myLogs}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[1, 3]} ticks={[1, 2, 3]} />
              <Tooltip />
              <Line type="monotone" dataKey="foodValue" className="food-line" />
            </LineChart>
          </div>
          <div>
            <p>飲水量</p>
            <LineChart width={300} height={150} data={myLogs}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[1, 3]} ticks={[1, 2, 3]} />
              <Tooltip />
              <Line type="monotone" dataKey="waterValue" />
            </LineChart>
          </div>
          <div>
            <p>便（3:良い / 2:下痢気味 / 1:出ない）</p>
            <LineChart width={300} height={150} data={myLogs}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[1, 3]} ticks={[1, 2, 3]} />
              <Tooltip />
              <Line type="monotone" dataKey="poopValue" className="poop-line" />
            </LineChart>
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => navigate("/top")}>TOP</button>
        <button onClick={() => navigate("/top")}>戻る</button>
      </div>
    </div>
  );
}

export default MyPet;
