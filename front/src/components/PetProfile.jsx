import React from "react";

function PetProfile({ pet }) {
  return (
    <div>
      <h2>{pet.name}のプロフィール</h2>
      <img src={pet.image} />
      <p>名前：{pet.name}</p>
      <p>誕生日：{pet.birth}</p>
      <p>犬種：{pet.breed}</p>
      <p>性別：{pet.gender}</p>
    </div>
  );
}

export default PetProfile;
