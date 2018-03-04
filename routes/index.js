const express         = require('express');
const titleNull       = require('../middleware/titlenull');
const checkLength     = require('../middleware/titlelength');
const priceNull       = require('../middleware/pricenull');
const BookController  = require('../controllers/bookcontroller');
const Router          = express.Router;

let router         = new Router();
let bookController = new BookController();

router.get('/books', bookController.listAllBook);

router.get('/book/:id', bookController.searchBook);

router.post('/book', titleNull, checkLength, priceNull, bookController.createBook);

router.delete('/book/:id', bookController.deleteBook);

router.put('/book/:id', titleNull, checkLength, priceNull, bookController.editBook);

module.exports = router;
