import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PetHealth({ currentId }) {
  const navigate = useNavigate();

  const getTodayString = () => {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const [date, setDate] = useState(getTodayString());
  const [weight, setWeight] = useState("");
  const [status, setStatus] = useState("元気");
  const [food, setFood] = useState("完食");
  const [water, setWater] = useState("いつも通り");
  const [poop, setPoop] = useState("良い");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        petId: currentId,
        date,
        weight,
        status,
        food,
        water,
        poop,
      }),
    };

    try {
      const response = await fetch(
        "http://localhost:3000/api/health-logs",
        options,
      );
      const result = await response.json();

      if (result.ok) {
        navigate("/top/pet");
      }
    } catch (err) {
      console.error("健康状態の登録に失敗しました", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>健康状態の入力</h3>

        <div>
          <label>日付：</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div>
          <label>体重(kg)：</label>
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div>
          <label>調子：</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="元気">元気</option>
            <option value="いつも通り">いつも通り</option>
            <option value="ぐったり">ぐったり</option>
          </select>
        </div>

        <div>
          <label>ごはん：</label>
          <select value={food} onChange={(e) => setFood(e.target.value)}>
            <option value="完食">完食</option>
            <option value="半分残した">半分残した</option>
            <option value="全く食べない">全く食べない</option>
          </select>
        </div>

        <div>
          <label>飲水量：</label>
          <select value={water} onChange={(e) => setWater(e.target.value)}>
            <option value="いつも通り">いつも通り</option>
            <option value="異常に多い">異常に多い</option>
            <option value="少ない">少ない</option>
          </select>
        </div>

        <div>
          <label>ウンチの状態：</label>
          <select value={poop} onChange={(e) => setPoop(e.target.value)}>
            <option value="良い">良い（バナナ状）</option>
            <option value="下痢気味">下痢気味</option>
            <option value="出ない">出ない</option>
          </select>
        </div>

        <button type="submit">決定</button>
      </form>

      <div>
        <button onClick={() => navigate("/top")}>TOP</button>
        <button onClick={() => navigate("/top/pet")}>戻る</button>
      </div>
    </div>
  );
}

export default PetHealth;
