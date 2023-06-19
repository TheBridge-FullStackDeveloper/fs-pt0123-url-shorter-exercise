export const generator = (client) => async (url) => {
  try {
    const { data: response } = await client.post('/short/generator', { url });
    console.info('> info data:', response);
    return response.data;
  } catch (error) {
    console.info('>info error:', error.message);
    return null;
  }
};

export const getLinks = (client) => async () => {
  try {
    const { data: response } = await client.get('/short/links-by-user');
    console.info('> info data:', response);
    return response.data;
  } catch (error) {
    console.info('>info error:', error.message);
    return null;
  }
};
