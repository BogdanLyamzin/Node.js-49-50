const {program} = require("commander");

const books = require("./books");

const invokeAction = async ({action, id, title, author}) => {
    switch(action) {
        case "list":
            const allBooks = await books.getAll();
            console.log(allBooks);
            break;
        case "getById":
            const oneBook = await books.getById(id);
            console.log(oneBook);
            break;
        case "add":
            const newBook = await books.add({title, author});
            console.log(newBook);
            break;
        case "updateById":
            const updateBook = await books.updateById(id, {title, author});
            console.log(updateBook);
            break;
        case "removeById":
            const deleteBook = await books.removeById(id);
            console.log(deleteBook)
            break;
        default: 
            console.log("Unknown action")
    }
}

program
    .option("-a, --action <type>")
    .option("-i, --id <type>")
    .option("-t, --title <type>")
    .option("-at, --author <type>");

program.parse();

const options = program.opts();
invokeAction(options);