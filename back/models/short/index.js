const { insertLink } = require("./queries")


const createUrl = (db) => async (url , token) => {
    try {
      
  
      const shortUrl = `/short/${token}`;
  
      await db.query( insertLink(url, shortUrl));
   
      return {
        ok: true,
      };
    } catch (error) {
      console.info('> create URL error: ', error.message);
      return {
        ok: false,
        message: error.message,
      };
    }
  };
  
  module.exports = {
    createUrl,
  };