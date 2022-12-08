const books = require("../../models/books");

const add =  async(req, res, next)=> {
    const result = await books.add(req.body);

    res.status(201).json(result);
}

module.exports = add;