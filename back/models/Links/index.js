const { insertUrl } = require("./queries");

const addUrl = (db) => async (shortURL, originURL, email) => {
  try {
    await db.query(insertUrl(shortURL, originURL, email));
    return {
      ok: true,
    };
  } catch (error) {
    console.log(error.message);

    return {
      ok: false,
      message: error.message,
    };
  }
};

module.exports = {
  addUrl,
};
