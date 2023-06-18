export const signup = (client) => async( params ) => {
    try {
        const { data: response } = await client.post( '/auth/signup', params );
        console.info( '=> Signup User Data: ', data );
        return response.ok;
    } catch (error) {
        console.info( '==> Signup User error:', error.message );
        return null;
    }
};