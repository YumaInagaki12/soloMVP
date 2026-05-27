const petData = [
  {
    name: "ポチ",
    birth: "2015-03-13",
    breed: "エントレブッハーキャトルドッグ",
    gender: "オス",
    image: "https://images.dog.ceo/breeds/entlebucher/n02108000_2303.jpg",
  },
];

exports.seed = async function (knex) {
  await knex("health_logs").del();
  await knex("pets").del();
  await knex("pets").insert(petData);
};
