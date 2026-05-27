import React from "react";

function Top({ pets, setScreen, setCurrentId }) {
  return (
    <div>
      <h1>トップ画面</h1>

      <div>
        <h2>登録ペット</h2>
        {pets.map((pet, index) => (
          <button
            key={pet.id}
            onClick={() => {
              setCurrentId(pet.id);
              setScreen("pet");
            }}
          >
            <img src={pet.image} alt={pet.name}></img>
            <p>ペットの名前：{pet.name}</p>
            <p>種類：{pet.breed}</p>
          </button>
        ))}
      </div>
      <button onClick={() => setScreen("addpet")}>ペットの追加</button>
    </div>
  );
}

export default Top;
