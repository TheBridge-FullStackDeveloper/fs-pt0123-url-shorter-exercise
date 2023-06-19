import axios from 'axios';

const info = async (client) => {
  try {
    const { data: response } = await client.get('/users');
    console.info(data);
    return response.data
  } catch (error) {
    console.info(error.message);
    return null
  }
};

export default info;
