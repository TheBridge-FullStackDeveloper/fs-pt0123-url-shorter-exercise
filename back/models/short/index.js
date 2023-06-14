const { getUrl, getById, newUrl, getEmail, addShortCount, getOriginal } = require("./queries")

const getAll = (db) => async () => {
    try {
        const response = await db.query(getUrl())
        return {
            ok: true,
            response: response.rows
        }
    } catch (error) {

        return {
            ok: false,
            message: error.message
        }
    }
}

const getXid = (db) => async (id) => {
    try {
        const response = await db.query(getById(id))
        return {
            ok: true,
            response: response.rows
        }
    } catch (error) {
        return {
            ok: false,
            message: error.message
        }
    }
}

const addUrl = (db)=>async ({origin_url},short_url,info_id)=>{
    try {
        const response = await db.query(newUrl(origin_url,short_url,info_id))
        return{
            ok:true,
            response:response.rows
        }
    } catch (error) {
        return{
            ok:false,
            message: error.message
        }
    }
}

const getInfo = (db)=>async (email)=>{
    try {
        const response = await db.query(getEmail(email))
        return{
            ok:true,
            response:response.rows
        }
    } catch (error) {
        return{
            ok:false,
            message: error.message
        }
    }
}

const increaseUses = (db)=>async(urlShorted)=>{
    try {
        const response = await db.query(addShortCount(urlShorted))
        return{
            ok:true,
            response:response.rows
        }
    } catch (error) {
        return{
            ok:false,
            message: error.message
        }
    }
}

const realLink = (db)=> async (urlShorted)=>{
    try {
        const response = await db.query(getOriginal(urlShorted))
    } catch (error) {
        return{
            ok:false,
            message: error.message
        }
    }
}

module.exports = {
    getAll,
    getXid,
    addUrl,
    getInfo,
    increaseUses,
    realLink
}