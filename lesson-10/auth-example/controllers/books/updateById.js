const {Book} = require("../../models/book")

const HttpError = require("../../helpers")

const updateById = async(req, res)=> {
    const {id} = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body, {new: true});
    if(!result) {
        throw HttpError(404, "Not found")
    }

    res.json(result)
}

module.exports = updateById