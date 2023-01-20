const jwt = require("jsonwebtoken")

const {User} = require("../../models/user")

const {SECRET_KEY} = process.env;

const google = async(req, res)=> {
    const {_id: id} = req.user;

    const payload = {
        id,
    }

    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"});
    await User.findByIdAndUpdate(id, {token});

    res.redirect(`http://localhost:3000?token=${token}`)
}

module.exports = google;