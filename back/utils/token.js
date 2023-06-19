const tokenGeneration = ( length ) => {

    const chars = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtVvWwXxYyZz0123456789'

    let token = '';
    for ( let i = 0; i < length; i++ ){
        const randomTok = Math.floor(Math.random() * chars.length );
        token += chars[randomTok];
    }

    return token;

};

module.exports = {
    tokenGeneration,
};