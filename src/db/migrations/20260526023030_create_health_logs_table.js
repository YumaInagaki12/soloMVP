/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("health_logs", function (table) {
    table.increments("id").primary();
    table
      .integer("pet_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("pets")
      .onDelete("CASCADE");
    table.string("date", 64).notNullable();
    table.float("weight");
    table.string("status", 64).notNullable();
    table.string("food", 64).notNullable();
    table.string("water", 64).notNullable();
    table.string("poop", 64).notNullable();
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("health_logs");
};
