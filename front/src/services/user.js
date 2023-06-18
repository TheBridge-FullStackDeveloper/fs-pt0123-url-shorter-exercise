const info = (client) => async () => {
    try {
            const { data } = await client.get('/users')
            console.info('> info data: ', data)
    } catch(error) {
        console.info('> info error: ', error.message)
    }
}