// UtcywcqGUA11JST5

const mongoose = require("mongoose")

const DB_HOST = "mongodb+srv://Bogdan:UtcywcqGUA11JST5@cluster0.pmpydrd.mongodb.net/books_reader?retryWrites=true&w=majority";

mongoose.connect(DB_HOST)
    .then(()=> console.log("database connect success"))
    .catch(error => console.log(error.message))