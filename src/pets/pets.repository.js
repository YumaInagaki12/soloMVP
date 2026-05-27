function createPetRepository(knex, table = "pets") {
  const list = async () => {
    return await knex(table).select("*");
  };

  const find = async (id) => {
    return await knex(table).where({ id }).first();
  };

  const create = async (payload) => {
    const [result] = await knex(table)
      .insert({
        name: payload.name,
        birth: payload.birth,
        breed: payload.breed,
        gender: payload.gender,
        image: payload.image,
      })
      .returning("id");

    return result.id || result;
  };

  return { list, find, create };
}

module.exports = { createPetRepository };
