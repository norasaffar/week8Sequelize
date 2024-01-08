const {Router} = require("express");
const bookRouter = Router();

const{addBook, getAllBooks, getBookByAuthor, deleteOneBookByTitle,deleteAllBooks,dynamicChange } = require("./controllers");

bookRouter.post("/books", addBook);
bookRouter.get("/books/:author", getBookByAuthor);
bookRouter.get("/books", getAllBooks);
bookRouter.delete("/books", deleteOneBookByTitle);
bookRouter.delete("/books/deleteallbooks",deleteAllBooks);
bookRouter.put("/books",dynamicChange )
module.exports = bookRouter;



