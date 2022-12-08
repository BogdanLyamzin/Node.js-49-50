const {Schema, model} = require("mongoose");

const bookSchema = new Schema({
    title: String,
    author: String,
})

const Book = model("book", bookSchema)

/*
const model = (collectionName, schema) => {
    const obj = {
        collectionName,
        schema,
        find() {
            const collection = connect(this.collectionName);
            return collection;
        },
        create(value) {
            const {error} = this.schema(value);
            if(error){
                throw Error(error.message)
            }
        }
    }
}
*/

module.exports = Book;