/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("pets", function (table) {
    table.increments("id").primary();
    table.string("name", 64).notNullable();
    table.string("birth", 64).notNullable();
    table.string("breed", 64).notNullable();
    table.string("gender", 64).notNullable();
    table.text("image", 255).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("pets");
};
