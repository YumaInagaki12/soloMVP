const express = require("express");
const cors = require("cors");
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig);
const { initPet } = require("./pets/index");
const { initHealth } = require("./health_logs/index");

function buildApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const petController = initPet(knex);
  const healthLogController = initHealth(knex);

  function validateIdMiddleware(req, res, next) {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        error: `Invalid id parameter. Instead received "${req.params.id}" which is a type of "${typeof req.params.id}"`,
      });
    }
    next();
  }

  app.get("/api/pets", petController.list);
  app.get("/api/pets/:id", validateIdMiddleware, petController.find);
  app.post("/api/pets", petController.create);

  function validatePetIdMiddleware(req, res, next) {
    const petId = Number(req.params.petId);
    if (!Number.isInteger(petId) || petId <= 0) {
      return res.status(400).json({
        error: `Invalid petId parameter. Instead received "${req.params.petId}"`,
      });
    }
    next();
  }

  app.get(
    "/api/health-logs/:petId",
    validatePetIdMiddleware,
    healthLogController.list,
  );
  app.post("/api/health-logs", healthLogController.create);

  app.use((req, res) => res.status(404).json({ error: "Not Found" }));

  return app;
}

module.exports = { buildApp };
