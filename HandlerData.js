const mysql = require('mysql');

class handlerData {

    constructor(config) {
        this.conn=mysql.createConnection(config);
    }

    GetBooks(sql) {
        let conn = this.conn;
        return new Promise(function (resolve,reject) {
            conn.query(sql,function (err,result) {
                if (err)
                    reject(err);
                resolve(result);
            });
        });
    }

    SearBook(sql,id) {
        let conn=this.conn;
        return new Promise(function (resolve,reject) {
           conn.query(sql,id,function (err,result) {
               if (err)
                   reject(err);
               resolve(result);
           }) ;
        });
    }
    DeleteBook(sql,id) {
        let conn=this.conn;
        return new Promise(function (resolve,reject) {
           conn.query(sql,id,function (err,result) {
               if (err)
                   reject(err);
               resolve(result);
           })
        });
    }
    CreateBook(sql,book) {
        let conn = this.conn;
        return new Promise(function (resolve,reject) {
            conn.query(sql,book,function (err,result) {
                if (err)
                    reject(err);
                resolve(result);
            });
        });
    }

    UpdateBook(sql,values) {
        let conn=this.conn;
        return new Promise( function (resolve,reject) {
           conn.query(sql,values, function (err,result) {
               if (err)
                   reject(err);
               resolve(result);
           });
        });
    }

}

module.exports=handlerData;