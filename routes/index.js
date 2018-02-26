const express = require('express');
const middleWare = require('../controllers/middleware/middleware');
let router = express.Router();

let book_Controller = require('../controllers/bookController');


// get list books
router.get('/books',book_Controller.book_list);

// get book by id

router.get('/book/:id',book_Controller.search_book);

// create book


router.post('/book',[middleWare,book_Controller.create_book]);

//delete book

router.delete('/book/:id',book_Controller.delete_book);

//update book

router.put('/book/:id',book_Controller.update_book);

module.exports = router;