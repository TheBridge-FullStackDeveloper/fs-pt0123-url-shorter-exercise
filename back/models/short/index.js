const { insertLink, getLinkId, updateLinkStats, incrementUsesByCreator, getUrlByCreate } = require("./queries")


const createUrl = (db) => async (url, token, email) => {
  try {


    const shortUrl = `${token}`;

    await db.query(insertLink(url, shortUrl, email));

    const urls = await  db.query(getUrlByCreate(email))
 
    return {
      ok: true,
      urls: urls.rows,
    };
  } catch (error) {
    console.info('> create URL error: ', error.message);
    return {
      ok: false,
      message: error.message,
    };
  }
};

const selectUrl = (db) => async (id) => {
  try {
    

   const idLink = await db.query(getLinkId(id))
   


   if(idLink.rowCount === 0) return {
    ok: false,
    error_code: 'URL_data',

}
   const usesMas = await db.query(updateLinkStats(id, idLink));
   console.log(usesMas)

   await db.query(incrementUsesByCreator(id, idLink));

   
    return {
      ok: true,
      origin_url:idLink.rows[0].origin_url,
    }
    
   

  } catch (error) {
    console.info('> URL  no está bien formada  ', error.message)
    return {
      ok: false,
      message: error.message,
    }
  }
}

module.exports = {
  createUrl,
  selectUrl,
};