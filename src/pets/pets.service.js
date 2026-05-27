function createPetService(repository) {
  const list = async () => {
    const result = await repository.list();
    return { ok: true, data: result };
  };
  const find = async (id) => {
    const result = await repository.find(id);
    if (!result)
      return { ok: false, status: 404, message: "idが見つかりません" };

    return { ok: true, data: result };
  };
  const create = async (payload) => {
    if (!payload.name) {
      return { ok: false, status: 400, message: "nameが見つかりません" };
    }
    const result = await repository.create(payload);
    return { ok: true, data: result };
  };
  return { list, find, create };
}
module.exports = { createPetService };
