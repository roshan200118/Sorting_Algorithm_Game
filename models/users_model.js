const mysql = require('mysql');

function newConn()
{
    // let conn = mysql.createConnection({
    //     host:'localhost',
    //     user: 'root',
    //     password:'password',
    //     database:'3350_proj'
    // });

    let conn = mysql.createConnection({
        host:'us-cdbr-east-06.cleardb.net',
        user: 'b4e2bb2ed7cf5b',
        password:'50e4f7f6',
        database:'heroku_604c8af702e1b5e'
    });
    return conn;
}
module.exports = newConn;