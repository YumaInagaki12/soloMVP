function createHealthService(repository) {
  const listByPetId = async (petId) => {
    if (!petId) {
      return { ok: false, status: 400, message: "petIdがないです" };
    }
    const result = await repository.listByPetId(petId);
    return { ok: true, data: result };
  };
  const create = async (payload) => {
    if (
      !payload.petId ||
      !payload.date ||
      !payload.status ||
      !payload.food ||
      !payload.water ||
      !payload.poop
    ) {
      return { ok: false, status: 400, message: "必須項目に未記入があります" };
    }
    const result = await repository.create(payload);
    return { ok: true, data: result };
  };
  return { listByPetId, create };
}
module.exports = { createHealthService };
