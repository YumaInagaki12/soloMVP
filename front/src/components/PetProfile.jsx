import React from "react";

function PetProfile({ pet }) {
  let head = `${pet.name}のプロフィール`;
  if (pet.gender === "オス") head = `${pet.name}くんのプロフィール`;
  if (pet.gender === "メス") head = `${pet.name}ちゃんのプロフィール`;
  return (
    <div>
      <h3>{head}</h3>
      {pet.image && <img src={pet.image} alt={pet.name} />}
      <p>名前：{pet.name}</p>
      <p>誕生日：{pet.birth}</p>
      <p>犬種：{pet.breed}</p>
      <p>性別：{pet.gender}</p>
    </div>
  );
}

export default PetProfile;
