"use strict";

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "park-login-lecture.com1rtup4rcn.ap-northeast-2.rds.amazonaws.com",
  user: "park7",
  password: "mingud5512",
  database: "login_lecture",
});

db.connect();

module.exports = db;
