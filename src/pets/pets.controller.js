function createPetController(service) {
  const list = async (req, res) => {
    const result = await service.list();
    res.status(200).json(result);
  };
  const find = async (req, res) => {
    const result = await service.find(Number(req.params.id));
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
  return { list, find, create };
}
module.exports = { createPetController };
