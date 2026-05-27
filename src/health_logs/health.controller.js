function createHealthController(service) {
  const list = async (req, res) => {
    const petId = Number(req.params.petId);
    const result = await service.listByPetId(petId);
    if (result.ok) {
      res.status(200).json(result);
    } else {
      res.status(result.status).json({ error: result.message });
    }
  };
  const create = async (req, res) => {
    const result = await service.create(req.body);
    if (result.ok) {
      res.status(201).json(result);
    } else {
      res.status(result.status).json({ error: result.message });
    }
  };
  return { list, create };
}
module.exports = { createHealthController };
