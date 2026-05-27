const { createPetRepository } = require("./pets.repository");
const { createPetService } = require("./pets.service");
const { createPetController } = require("./pets.controller");

function initPet(knex) {
  const repository = createPetRepository(knex);
  const service = createPetService(repository);
  const controller = createPetController(service);

  return controller;
}

module.exports = { initPet };
