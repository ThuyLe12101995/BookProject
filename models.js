const mysql = require('mysql');
let getBook = "select * from book where isdelete = 0";
let searchBook = 'select * from book where id = ? and isdelete = 0 limit 1';
let createBook= "insert into book set ?, `isdelete`= '0' ";
// let deleteBook = 'delete from book where id = ?';
let softDelete = 'update book set isdelete = 1 where id = ?';
let updateBook = 'update book set ? where id =';
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
           conn.query(searchBook,id,function (err,result) {
               if (err)
                   reject(err);
               resolve(result);
           }) ;
        });
    }
/*    DeleteBook(id) {
        let conn=this.conn;
        return new Promise(function (resolve,reject) {
           conn.query(deleteBook,id,function (err,result) {
               if (err)
                   reject(err);
               resolve(result);
           })
        });
    }*/
    SoftDelete(id) {
        let conn = this.conn;
        return new Promise(function (resolve,reject) {
           conn.query(softDelete,id,function (err,result) {
               if (err)
                   reject(err);
               resolve(result);
           });
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