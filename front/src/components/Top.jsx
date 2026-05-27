import React from "react";
import { useNavigate } from "react-router-dom";

function Top({ pets, setCurrentId }) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>トップページ</h1>
      <div>
        <h2>ペット一覧</h2>
        {pets.map((pet) => (
          <button
            key={pet.id}
            onClick={() => {
              setCurrentId(pet.id);
              navigate("/top/pet");
            }}
          >
            <img src={pet.image} alt={pet.name}></img>
            <p>ペットの名前：{pet.name}</p>
            <p>種類：{pet.breed}</p>
          </button>
        ))}
      </div>
      <button onClick={() => navigate("/top/addpet")}>ペットの追加</button>
    </div>
  );
}

export default Top;
