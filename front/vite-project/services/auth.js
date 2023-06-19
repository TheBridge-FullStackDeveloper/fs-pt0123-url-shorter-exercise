

export const login =(client)=> async (params)=>{
 try{
    const {data} = await client.post('/auth/signup', params)
    console.info(data)
    return data
 }catch{error}{
    return {success: false}
 }
}

export const registe = (client) => async (params) => {
    try{
     const {data} = await client.post('/auth/signin', params)

     console.info(data)
    }catch{error}
}