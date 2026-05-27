function createHealthRepository(knex, table = "health_logs") {
  const listByPetId = async (petId) => {
    return await knex(table).where({ pet_id: petId });
  };
  const create = async (payload) => {
    const [inserted] = await knex(table)
      .insert({
        pet_id: payload.petId,
        date: payload.date,
        weight: payload.weight ? parseFloat(payload.weight) : null,
        food: payload.food,
        water: payload.water,
        poop: payload.poop,
      })
      .returning("*");
    return inserted;
  };
  return { listByPetId, create };
}
module.exports = { createHealthRepository };
