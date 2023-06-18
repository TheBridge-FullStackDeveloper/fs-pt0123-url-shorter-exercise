const genToken = (len = 8) => {
    const init = 2
    return Math.random().toString(36).slice(init, init + len)
}

module.exports = {
    genToken,
}