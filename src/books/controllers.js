const { where } = require("sequelize");
const Book = require("./model")

const addBook = async (req, res) => {
  try {
    
    const book = await Book.create({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
    });

    res.status(201).json({message:"book created", book: book});

  } catch(error){
     res.status(500).json({message: error.message, error: error});
  }

};

const getAllBooks = async (req, res) => {
try {
    const books = await Book.findAll()

    res.status(200).json ({message: "all books here",books: books});

} catch (error) {
    res.status(500).json({message: error.message, error: error});
}

};

const getBookByAuthor = async (req, res) => {
    try {
      console.log(req.params)
      const book = await Book.findOne({where: {author: req.params.author}})
     
  
        res.status(200).json({ message: `Book by ${book.author}`, book: book });
      
    //  res.send("hello")
    } catch (error) {
      res.status(500).json({ message: " Server Error", error: error });
    }
};

const deleteOneBookByTitle = async (req, res) => {
  try {
    const book = {
      title: "",
      isDeleted: true,
    };

     const deletedBook = await Book.destroy({
        where:{
          title: req.body.title, 
        },
     });

     res.status(201).json({message:"book deleted", deletedBook: deletedBook});
  } catch (error){
     res.status(500).json({message : error.message, error: error})
  }
};


const deleteAllBooks = async (req, res) => {
  try {
    const deletedBooks = await Book.destroy({
      truncate: true
    });

    res.status(200).json({ message: 'All books deleted successfully', deleteAllBooks: deleteAllBooks });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const dynamicChange = async (request, response) => { 
  const index = await Book.update(  
     { [request.body.dynamicKey1]: request.body.dynamicValue1},
     {
     where: {title: request.body.title}
     }
     ); 
 

  const sucessResponse = {
      message: "Dynamic changed",
      book: index,
  };

  response.send(sucessResponse);
}






module.exports = {
    addBook: addBook,
    getAllBooks: getAllBooks,
    getBookByAuthor : getBookByAuthor,
    deleteOneBookByTitle : deleteOneBookByTitle,
    deleteAllBooks :deleteAllBooks,
    dynamicChange :dynamicChange , 

};