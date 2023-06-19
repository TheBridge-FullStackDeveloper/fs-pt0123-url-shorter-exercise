const errors = require("../../misc/errors");
const { addUrl } = require("../../models/Links");

module.exports = (db) => async (req, res, next) => {
  const { url } = req.body;
  const { email } = res.locals;

  const shortUrl = () => {
    const characters =
      "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let random = "";
    let url = "/short/";
    for (let i = 0; i < 8; i++) {
      random += characters[Math.floor(Math.random() * characters.length)];
    }
    return url + random;
  };

  const newUrl = await addUrl(await db)(shortUrl(), url, email);

  if (!newUrl.ok) return next(errors[500]);

  res.status(200).json({
    success: true,
    data: {
      url: shortUrl(),
    },
  });
};
