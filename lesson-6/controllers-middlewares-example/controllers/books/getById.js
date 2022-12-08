const Book = require("../../models/book")

const HttpError = require("../../helpers")

const getById = async(req, res, next)=> {
    const {id} = req.params;
    // const result = await books.getById(id);

    // if(!result) {
    //     throw HttpError(404, "Not found");
    // }

    // res.json(result)
}

module.exports = getById