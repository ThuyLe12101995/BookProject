const handlerData = require('../models');
const config = require('../mysql-config');
let handler = new handlerData(config);

exports.book_list = function (req, res) {
    handler.GetBooks().then(function (result) {
        res.send(result);
    });
};

exports.search_book = function (req, res) {
    handler.SearBook(req.params.id).then(function (result) {
        res.send(result);
    });
};

exports.update_book = function (req, res) {
    handler.UpdateBook(req.params.id,req.body).then(function (result) {
        res.status(200).send({alert:'success',message:result.message});
    });
};

exports.delete_book = function (req, res) {
    handler.SoftDelete(req.params.id).then(function (result) {
        res.status(200).send({alert:"success",message:result.message});
    });
};

exports.create_book = function (req, res) {
    handler.CreateBook(req.body).then(function (result) {
        res.status(201).send({state:"success",
            ID:result.insertId
        });
    });
};

