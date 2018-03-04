const HandlerData   = require('../handler-data');
const mysqlConfig   = require('../mysql-config');

let handlerData = new HandlerData(mysqlConfig);

class BookController {

    listAllBook(request, response) {
        handlerData.all().then(function (results) {
            response.status(200).json(results);
        });
    }

    searchBook(request, response) {
        handlerData.search(request.params.id).then(function (result) {
            response.status(200).json(result);
        });
    }

    editBook(request, response) {
        let bookId = request.params.id;
        let values  = request.body;
        handlerData.edit(bookId,values).then(function (result) {
           response.status(200).json({ message : result.message });
        });
    }

    deleteBook(request, response) {
        handlerData.remove(request.params.id).then(function (result) {
           response.status(200).json({ message : result.message });
        });
    }

    createBook(request, response) {
        handlerData.add(request.body).then(function (result) {
           response.status(201).json({ message : result.message });
        });
    }
}

module.exports = BookController;