const {
  hash,
  serialize,
  deserialize,
} = require("simple-stateless-auth-library");
const errors = require("../../misc/errors");
const { getLinksByUser } = require("../../models/short");

module.exports = (db) => async (req, res, next) => {
  const { id } = deserialize(req);
  const response = await getLinksByUser(await db)(id);
  if (!response.ok) return next(errors[response.error_code || 500]);
  console.log(response);

  res.status(200).json({
    success: true,
    data: {
      links: response.links,
    },
  });
};
