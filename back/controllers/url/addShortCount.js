const queries= require ("../../models/short/index")

module.exports=(db)=>async (req,res,next)=>{
    const urlShorted = req.params.shortUrl;
    const dbRes = await queries.increaseUses(await db)(urlShorted)
    if (!dbRes || !dbRes.ok) {
        return next({
          statusCode: 500,
          error: new Error("something went wrong!")
        });
      }
      
    res.status(200).json({
        success: true,
        data: dbRes.response
    })
}


// const queries = require("../../models/short/index");

// module.exports = (db) => async (req, res, next) => {
//   const urlShorted = req.params.shortUrl;

//   try {
//     await queries.increaseUses(await db)(urlShorted);

//     const link = await queries.realLink(await db)(urlShorted);
//     const originLink = link.origin_url;

//     res.status(200).json({
//       success: true,
//       data: originLink,
//     });
//   } catch (error) {
//     next({
//       statusCode: 500,
//       error: new Error("Something went wrong!"),
//     });
//   }
// };
