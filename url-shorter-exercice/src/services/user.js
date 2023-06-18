export const info = (client) => async() => {
    try {
        const { data: response } = await client.get( '/users' );
        console.info( '=> Info User Data: ', data );
        return response.data;
    } catch (error) {
        console.info( '==> Info User error:', error.message );
        return null;
    }
};