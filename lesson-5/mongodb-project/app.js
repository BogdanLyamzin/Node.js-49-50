const mongoose = require("mongoose")

const {DB_HOST} = process.env;

mongoose.connect(DB_HOST)
    .then(()=> console.log("database connect success"))
    .catch(error => console.log(error.message))