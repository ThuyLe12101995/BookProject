const express =  require('express');
const bodyParser = require('body-parser');
const app = express();
const index = require('./routes/index');

//Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/',index);
/*
let handler = new handlerData(config);



app.get('/books', function (req,res) {
    handler.GetBooks().then(function (result) {
        res.json(result);
    });
});

app.get('/books/:id', function (req,res) {
    handler.SearBook(req.params.id).then(function (result) {
        res.json(result);
    }).then(function (err) {
        res.status(404).send(err);
    });
});

app.delete('/books/:id', function (req,res) {
    handler.DeleteBook(req.params.id).then(function (result) {
        res.status(200).send(result);
    });
});

app.post('/books', function (req,res) {
    handler.CreateBook(req.body).then(function (result) {
       res.send({state:"success",
                    ID:result.insertId
       });
    });
});

app.put('/books/:id', function (req,res) {
    handler.UpdateBook(req.params.id,req.body).then(function (result) {
       res.send(result);
    });
});
*/

app.listen(3000, function () {
   console.log("Server running in port 3000 !");
});

