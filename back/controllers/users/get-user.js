module.exports = () => async (req, res, next) => {
    const { user } = res.locals

    res.status(200).json({
        success: true,
        data: {
            username: user.username,
        },
    })
}