const Book = require("../../models/book")

const HttpError = require("../../helpers")

const updateById = async(req, res, next)=> {
    const {id} = req.params;
    // const result = await books.updateById(id, req.body);
    // if(!result) {
    //     throw HttpError(404, "Not found")
    // }

    // res.json(result)
}

module.exports = updateById