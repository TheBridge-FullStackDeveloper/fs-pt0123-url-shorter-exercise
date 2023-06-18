const PATH = "/short";

export const generate = (client) => async (params) => {
  try {
    const { data } = await client.post(`${PATH}/generator`, params);
    return data
  } catch (error) {
    console.info("> error [generate]: ", error.message);
    return {
      success: false,
    };
  }
};
