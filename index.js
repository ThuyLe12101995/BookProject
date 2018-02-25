const express =  require('express');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config');
const handlerData = require('./HandlerData');
//Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

let handler = new handlerData(config);

let getBook = 'select * from book';
let searBook = 'select * from book where id = ?';
let createBook= 'insert into book set ?';
let deleteBook = 'delete from book where id = ?';
let updateBook = 'update book set ? where id = ';

app.get('/books', function (req,res) {
    handler.GetBooks(getBook).then(function (result) {
        res.json(result);
    });
});

app.get('/books/:id', function (req,res) {
    handler.SearBook(searBook,req.params.id).then(function (result) {
        res.json(result);
    }).then(function (err) {
        res.status(404).send(err);
    });
});

app.delete('/books/:id', function (req,res) {
    handler.DeleteBook(deleteBook,req.params.id).then(function (result) {
        res.status(200).send(result);
    });
});

app.post('/books', function (req,res) {
    handler.CreateBook(createBook,req.body).then(function (result) {
       res.send({state:"success",
                    ID:result.insertId
       });
    });
});

app.put('/books/:id', function (req,res) {
    handler.UpdateBook(updateBook+req.params.id,req.body).then(function (result) {
       res.send(result);
    });
});

app.listen(3000, function () {
   console.log("Server running in port 3000 !");
});

