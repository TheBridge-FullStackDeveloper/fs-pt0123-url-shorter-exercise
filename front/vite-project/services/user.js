

export const info = (client) => async()=> {
 try{
  const {data} = await client.get('/users')
  console.info(data)
  return data
 }catch{error}{
 return null
 }
}