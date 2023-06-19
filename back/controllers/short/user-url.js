const {selectUrl } = require("../../models/short")
const errors = require('../../misc/errors');
const { deserialize } = require("simple-stateless-auth-library");

module.exports = (db) => async (req, res, next) => {
    const { id} = req.params;
    
  
  
    if (id.length !== 8) {
        return next(errors['URL_data'])
      }
    const result = await selectUrl(await db)(id)
 
  

    if(!result.ok)return  next(errors[result.error_code])


    const tokenContent = deserialize(req, result.content);
   console.log(tokenContent)

    res.status(200).json({
        success: true,
        data: {
            origin_url: result.origin_url,
        }
    })
    
}