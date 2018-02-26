const mysql = require('mysql');
let getBook = 'select * from book';
let searBook = 'select * from book where id = ?';
let createBook= 'insert into book set ?';
let deleteBook = 'delete from book where id = ?';
let updateBook = 'update book set ? where id = ';
class handlerData {

    constructor(config) {
        this.conn=mysql.createConnection(config);
    }

    GetBooks() {
        let conn = this.conn;
        return new Promise(function (resolve,reject) {
            conn.query(getBook,function (err,result) {
                if (err)
                    reject(err);
                resolve(result);
            });
        });
    }

    SearBook(id) {
        let conn=this.conn;
        return new Promise(function (resolve,reject) {
           conn.query(searBook,id,function (err,result) {
               if (err)
                   reject(err);
               resolve(result);
           }) ;
        });
    }
    DeleteBook(id) {
        let conn=this.conn;
        return new Promise(function (resolve,reject) {
           conn.query(deleteBook,id,function (err,result) {
               if (err)
                   reject(err);
               resolve(result);
           })
        });
    }
    CreateBook(book) {
        let conn = this.conn;
        return new Promise(function (resolve,reject) {
            conn.query(createBook,book,function (err,result) {
                if (err)
                    reject(err);
                resolve(result);
            });
        });
    }

    UpdateBook(id,values) {
        let conn=this.conn;
        return new Promise( function (resolve,reject) {
           conn.query( updateBook+id,values, function (err,result) {
               if (err)
                   reject(err);
               resolve(result);
           });
        });
    }

}

module.exports=handlerData;