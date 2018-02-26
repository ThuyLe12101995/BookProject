const handlerData = require('../model');
const config = require('../config');
let handler = new handlerData(config);

exports.book_list = function (req,res) {
    handler.GetBooks().then(function (result) {
        res.json(result);
    });
};

exports.search_book = function (req,res) {
    handler.SearBook(req.params.id).then(function (result) {
        res.json(result);
    }).then(function (err) {
        res.status(404).send(err);
    });
};

exports.update_book = function (req,res) {
    handler.UpdateBook(req.params.id,req.body).then(function (result) {
        res.send(result);
    });
};

exports.delete_book = function (req,res) {
    handler.DeleteBook(req.params.id).then(function (result) {
        res.status(200).send(result);
    });
};

exports.create_book = function (req,res) {
    handler.CreateBook(req.body).then(function (result) {
        res.status(201).send({state:"success",
            ID:result.insertId
        });
    });
};

