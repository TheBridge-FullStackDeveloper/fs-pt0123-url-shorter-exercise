const {
  hash,
  serialize,
  deserialize,
} = require("simple-stateless-auth-library");
const errors = require("../../misc/errors");
const {
  getLink,
  updateUses,
  updateUsesByCreator,
} = require("../../models/short");

module.exports = (db) => async (req, res, next) => {
  const params = req.params;
  const { ok, link } = await getLink(await db)(params.id);
  if (!ok) return next(errors[response.error_code || 500]);
  if (!link) return next(errors.incorrect_url);
  //Actualizar uses
  await updateUses(await db)(link.id, ++link.uses);
  //Si el creador es quien lo visia sima uno a uses_by_creator
  const { id } = deserialize(req);

  if (link.created_by === id) {
    await updateUsesByCreator(await db)(link.id, ++link.uses_by_creator);
  }
  res.status(301).json({
    success: true,
    data: {
      originUrl: link.origin_url,
    },
  });
};
