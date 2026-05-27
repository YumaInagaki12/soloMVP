const { createHealthRepository } = require("./health.repository");
const { createHealthService } = require("./health.service");
const { createHealthController } = require("./health.controller");

function initHealth(knex) {
  const repository = createHealthRepository(knex);
  const service = createHealthService(repository);
  const controller = createHealthController(service);

  return controller;
}

module.exports = { initHealth };
