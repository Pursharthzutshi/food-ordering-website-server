// const router = require("express").Router()

const mysql = require("mysql");

//create database

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Password",
    port:3306,
    database:"resturant_website"
})

db.connect((err)=>{
    if(err){
        console.log(err)
    }
})

module.exports = db;