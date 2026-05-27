import React, { useState } from "react";

function AddPet({ setScreen }) {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader(); //FileRender()で専用のオブジェクトに変換
      reader.onloadend = () => setImage(reader.result); //読み込んだらimageをセット
      reader.readAsDataURL(file); //特殊な文字列に変換
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); //デフォルト処理を止める
    const petData = { name, birth, breed, gender, image };

    try {
      const response = await fetch("http://localhost:3000/api/pets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(petData),
      });
      const result = await response.json();
      if (result.ok) {
        setScreen("top"); //登録したらtop画面に戻る
      }
    } catch (err) {
      console.error("ペットの登録に失敗しました", err);
    }
  };

  return (
    <div>
      <h1>ペットの追加</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>名前：</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>画像：</label>
          <input type="file" onChange={handleImageChange} />
        </div>
        <div>
          <label>生年月日：</label>
          <input
            type="date"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
          />
        </div>
        <div>
          <label>種類：</label>
          <input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </div>
        <div>
          <label>性別：</label>
          <input
            type="radio"
            name="gender"
            value="オス"
            checked={gender === "オス"}
            onChange={(e) => setGender(e.target.value)}
          />
          オス
          <input
            type="radio"
            name="gender"
            value="メス"
            checked={gender === "メス"}
            onChange={(e) => setGender(e.target.value)}
          />
          メス
        </div>
        <button type="submit" onClick={() => setScreen("top")}>
          登録
        </button>
      </form>
      <div>
        <button onClick={() => setScreen("top")}>TOP</button>
        <button onClick={() => setScreen("top")}>戻る</button>
      </div>
    </div>
  );
}

export default AddPet;
