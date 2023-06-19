const router = require("express").Router();
const { authorizer } = require("../middlewares");

const linkControllers = require("../controllers/links");

module.exports = (db) => {
  router.post("/short", authorizer, linkControllers.urlShortened(db));

  return router;
};
