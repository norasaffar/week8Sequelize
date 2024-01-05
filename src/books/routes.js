const {Router} = require("express");
const bookRouter = Router();

const{addBook, getAllBooks, getBookByAuthor, deleteOneBookByTitle,deleteAllBooks} = require("./controllers");

bookRouter.post("/books", addBook);
bookRouter.get("/books/:author", getBookByAuthor);
bookRouter.get("/books", getAllBooks);
bookRouter.delete("/books", deleteOneBookByTitle);
bookRouter.delete("/books/deleteallbooks",deleteAllBooks);
module.exports = bookRouter;



