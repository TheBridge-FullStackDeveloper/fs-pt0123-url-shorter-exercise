const queries= require ("../../models/short/index")

module.exports=(db)=>async (req,res,next)=>{
    const id=req.params.id
    const dbRes = await queries.getXid(await db)(id)
    
    if (!dbRes.ok) return next({
        statusCode: 500,
        error: new Error("something went wrong!")
    })
    res.status(200).json({
        success: true,
        data: dbRes.response
    })
}