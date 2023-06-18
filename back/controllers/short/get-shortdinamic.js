const {getShortDynamic} = require("../../models/short");

module.exports = (db) => async (req, res, next) => {
  const { id } = req.params;

  if (id.length !== 8) {
    return res.status(400).json({
      success: false,
      error: "La URL no está bien formada",
    });
  }
  const dbRes = await getShortDynamic(await db)(id);

  if (!dbRes.ok)
    return next({
      statusCode: 500,
      error: new Error("something went wrong!"),
    });

  res.status(200).json({
    success: true,
    data: dbRes.response,
  });
};
