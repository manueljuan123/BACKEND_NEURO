/*
const Sequelize = require('sequelize');

const AdminModel = require('./../models/admin.model')

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    dialect: 'mysql'
})

const AdminM = AdminModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
    console.log("Tablas sincronizadas")
})

module.exports = {
    AdminM
}
*/


const mysql = require('mysql')
require('dotenv').config()


const conexion = mysql.createConnection({
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST
})

conexion.connect( (error) => {
    if(error){
        console.log("El error de conexión es "+ error)
    }else{
        console.log("Conexión MYSQL exitosa")
    }
})

module.exports = conexion