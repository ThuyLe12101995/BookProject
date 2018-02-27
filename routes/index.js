const express = require('express');
const titleNull = require('../middleware/titlenull');
const checkLength = require('../middleware/titlelength');
const priceNull =  require('../middleware/pricenull');
let router = express.Router();
let book_Controller = require('../controllers/bookController');

// get list books

router.get('/books',book_Controller.book_list);

// get book by id

router.get('/book/:id',book_Controller.search_book);

// create book

router.post('/book',titleNull,checkLength,priceNull,book_Controller.create_book);

//delete book

router.delete('/book/:id',book_Controller.delete_book);

//update book

router.put('/book/:id',titleNull,checkLength,priceNull,book_Controller.update_book);

module.exports = router;