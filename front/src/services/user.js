const PATH = "/users";

export const basic = (client) => async () => {
  try {
    const { data } = await client.get(`${PATH}`);
    return data
  } catch (error) {
    console.info("> error [basic]: ", error.message);
    return {
      success: false,
    };
  }
};

export const shorts = (client) => async () => {
  try {
    const { data } = await client.get(`${PATH}/shorts`);
    return data
  } catch (error) {
    console.info("> error [shorts]: ", error.message);
    return {
      success: false,
    };
  }
};
