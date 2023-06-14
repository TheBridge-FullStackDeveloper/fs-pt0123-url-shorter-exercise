// module.exports = () => async (req, res, next) => {
//     const { username } = res.locals

//     res.status(200).json({
//         success: true,
//         data: {
//             username,
//         },
//     })
// }

module.export = () => async (req, res, next) => {
    const body = req.body

    const dbRes = await postShortGenerator (await  db , body)()


}