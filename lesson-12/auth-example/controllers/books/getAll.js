const {Book} = require("../../models/book")

const getAll = async(req, res)=> {
    const {_id: owner} = req.user;
    const {page = 1, limit = 10, favorite} = req.query;
    const skip = (page - 1) * limit;
    const query = {owner};
    // if(typeof favorite !== "undefined") {
    //     query.favorite = favorite;
    // }
    query.favorite = favorite ? favorite : {$in: [true, false]};
    const result = await Book.find(query, "-createdAt -updatedAt", {skip, limit})
                            .populate("owner", "name email");

    res.json(result)
}

module.exports = getAll;