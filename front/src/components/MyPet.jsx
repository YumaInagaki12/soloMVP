import React from "react";
import PetProfile from "./PetProfile.jsx";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function MyPet({ pets, healthLogs, currentId, setScreen }) {
  const currentPet = pets[currentId] || {};

  const myLogs = healthLogs
    .filter((log) => Number(log.petId) === Number(currentId)) //うまくいかなかったのでNumberで統一
    .map((log) => {
      let foodScore = 3;
      if (log.food === "半分残した") foodScore = 2;
      if (log.food === "全く食べない") foodScore = 1;

      let waterScore = 2;
      if (log.water === "異常に多い") waterScore = 3;
      if (log.water === "少ない") waterScore = 1;

      let poopScore = 3;
      if (log.poop === "軟便・下痢") poopScore = 2;
      if (log.poop === "硬い・出ない") poopScore = 1;

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
      <button onClick={() => setScreen("health")}>ペットの健康管理</button>
      <div>
        <h3>体重の推移</h3>
        {myLogs.length > 0 ? (
          <div>
            <div>
              <p>体重 (kg)</p>
              <LineChart
                width={300}
                height={150}
                data={myLogs}
                className="weight-chart"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="weight"
                  className="weight-line"
                />
              </LineChart>
            </div>
            <div>
              <p>ごはん（3:完食 / 2:半分 / 1:食べない）</p>
              <LineChart
                width={300}
                height={150}
                data={myLogs}
                className="food-chart"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[1, 3]} ticks={[1, 2, 3]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="foodValue"
                  className="food-line"
                />
              </LineChart>
            </div>
            <div>
              <p>飲水量（3:多い / 2:普通 / 1:少ない）</p>
              <LineChart
                width={300}
                height={150}
                data={myLogs}
                className="water-chart"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[1, 3]} ticks={[1, 2, 3]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="waterValue"
                  className="water-line"
                />
              </LineChart>
            </div>
            <div>
              <p>ウンチ（3:良い / 2:軟便下痢 / 1:硬い出ない）</p>
              <LineChart
                width={300}
                height={150}
                data={myLogs}
                className="poop-chart"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[1, 3]} ticks={[1, 2, 3]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="poopValue"
                  className="poop-line"
                />
              </LineChart>
            </div>
          </div>
        ) : (
          <p>まだ健康記録がありません。</p>
        )}
      </div>
      <div>
        <button onClick={() => setScreen("top")}>TOP</button>
        <button onClick={() => setScreen("top")}>戻る</button>
      </div>
    </div>
  );
}

export default MyPet;
