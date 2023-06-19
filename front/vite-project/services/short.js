

export const url =(client)=> async (params)=>{
    try{
       const {data} = await client.post('/short/generator', params)
       console.info(data)
       return data
    }catch{error}{
      return {success: false}
    }
   }



 

 