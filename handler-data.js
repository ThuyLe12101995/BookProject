const mysql = require('mysql');

let getBook = "select * from book where isdelete = 0";
let searchBook = 'select * from book where id = ? and isdelete = 0 limit 1';
let createBook= "insert into book set ?, `isdelete`= '0' ";
let softDelete = 'update book set isdelete = 1 where id = ?';
let updateBook = 'update book set ? where id =';

class HandlerData {

    constructor(config) {
        this.conn=mysql.createConnection(config);
    }

    all() {
        let conn = this.conn;
        return new Promise(function (resolve,reject) {
            conn.query(getBook,function (err,result) {
                if (err)
                    reject(err);
                resolve(result);
            });
        });
    }

    sear(id) {
        let conn=this.conn;
        return new Promise(function (resolve,reject) {
           conn.query(searchBook,id,function (err,result) {
               if (err)
                   reject(err);
               resolve(result);
           }) ;
        });
    }

    remove(id) {
        let conn = this.conn;
        return new Promise(function (resolve,reject) {
           conn.query(softDelete,id,function (err,result) {
               if (err)
                   reject(err);
               resolve(result);
           });
        });
    }

    add(book) {
        let conn = this.conn;
        return new Promise(function (resolve,reject) {
            conn.query(createBook,book,function (err,result) {
                if (err)
                    reject(err);
                resolve(result);
            });
        });
    }

    edit(id, values) {
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

module.exports=HandlerData;

