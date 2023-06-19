module.exports = () => async (req, res, next) => {
  const { username, id, email } = res.locals;

  res.status(200).json({
    success: true,
    data: {
      id,
      email,
      username,
    },
  });
};
