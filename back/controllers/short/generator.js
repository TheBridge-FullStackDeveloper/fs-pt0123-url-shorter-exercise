const {
  hash,
  serialize,
  deserialize,
} = require("simple-stateless-auth-library");
const errors = require("../../misc/errors");
const { createLink } = require("../../models/short");
const ShortUniqueId = require("short-unique-id");

module.exports = (db) => async (req, res, next) => {
  const { url } = req.body;
  const shortUrl = new ShortUniqueId({ length: 8 })();

  const { email } = deserialize(req);
  const response = await createLink(await db)(shortUrl, url, email);
  if (!response.ok) return next(errors[response.error_code || 500]);

  res.status(200).json({
    success: true,
    data: {
      url: `/short/${shortUrl}`,
    },
  });
};
