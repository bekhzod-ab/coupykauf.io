

const logOut = (req,res) => {
    res.clearCookie("Stoken").send()
}

module.exports = logOut;