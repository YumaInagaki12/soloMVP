import React, { useState } from "react";
// import { useBarStackClipPathUrl } from "recharts/types/cartesian/BarStack";

function AddPet({ pets, setPets, setScreen }) {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPets([...pets, { name, birth, breed, gender, image }]);
    setScreen("top");
  };

  return (
    <div>
      <h1>ペット追加</h1>

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
          <input type="file" accept="image/*" onChange={handleImageChange} />
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

        <button type="submit">登録</button>
      </form>

      <div>
        <button onClick={() => setScreen("top")}>トップへ戻る</button>
        <button onClick={() => setScreen("top")}>上の階層に戻る</button>
      </div>
    </div>
  );
}

export default AddPet;
