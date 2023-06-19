const {
  insertLink,
  getShortLink,
  updateUses,
  updateUsesByCreator,
  getLinksByUser,
} = require("./queries");

const createLink = (db) => async (shortUrl, originUrl, email) => {
  try {
    await db.query(insertLink(shortUrl, originUrl, email));
    return {
      ok: true,
    };
  } catch (error) {
    console.info("> create link error: ", error);
    return {
      ok: false,
      message: error.message,
    };
  }
};

const getLink = (db) => async (shortUrl) => {
  try {
    const { rows } = await db.query(getShortLink(shortUrl));
    return {
      ok: true,
      link: rows[0],
    };
  } catch (error) {
    console.info("> get link error: ", error);
    return {
      ok: false,
      message: error.message,
    };
  }
};

const _updateUses = (db) => async (id, uses) => {
  try {
    await db.query(updateUses(id, uses));
    return {
      ok: true,
    };
  } catch (error) {
    console.info("> upade uses error: ", error);
    return {
      ok: false,
      message: error.message,
    };
  }
};
const _updateUsesByCreator = (db) => async (id, uses) => {
  try {
    await db.query(updateUsesByCreator(id, uses));
    return {
      ok: true,
    };
  } catch (error) {
    console.info("> upade uses by creator error: ", error);
    return {
      ok: false,
      message: error.message,
    };
  }
};

const _getLinksByUser = (db) => async (id) => {
  try {
    const { rows } = await db.query(getLinksByUser(id));
    return {
      ok: true,
      links: rows,
    };
  } catch (error) {
    console.info("> get links error: ", error);
    return {
      ok: false,
      message: error.message,
    };
  }
};

module.exports = {
  createLink,
  getLink,
  updateUses: _updateUses,
  updateUsesByCreator: _updateUsesByCreator,
  getLinksByUser: _getLinksByUser,
};
