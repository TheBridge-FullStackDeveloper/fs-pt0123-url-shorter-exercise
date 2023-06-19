const login = (client) => async (params) =>{

     try {
        const {data} = await client.post("/auth/signup", params)
        console.info(data)
        return data
     } catch (error) {
        console.info(error.message)
        return {success: false}
     }
}

export default login
