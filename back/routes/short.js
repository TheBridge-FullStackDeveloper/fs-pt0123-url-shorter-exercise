const router = require("express").Router();
const { authorizer } = require("../middlewares");

const shortControllers = require("../controllers/short");

module.exports = (db) => {
  router.post("/generator", authorizer, shortControllers.generator(db));
  router.get("/links-by-user", authorizer, shortControllers.getLinksByUser(db));
  router.get("/:id", shortControllers.getShort(db));

  return router;
};
