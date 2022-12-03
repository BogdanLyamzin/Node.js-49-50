const express = require("express");

const books = require("./books")

const app = express();

app.set("json spaces", 8)

app.get("/books", (req, res)=> {
    const databaseResponse = null;
    // res.json(databaseResponse)
    // res.send(databaseResponse)
    res.json(books)
})

app.listen(3000);