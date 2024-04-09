const Sequelize = require('sequelize');
const database = require('../config/dbConfig');
const productsModel = require('./productsModel');

const colorsModel = database.define('colors', {
    id:{
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING(50),
        allowNull: false
    },
    rgb:{
        type: Sequelize.STRING(11),
        allowNull: true
    },
    hex_code:{
        type: Sequelize.STRING(10),
        allowNull: true
    },
    product_id:{
        type: Sequelize.INTEGER(10),
        allowNull: false,
        references:{
            model: productsModel,
            key: 'id'
        }
    }
})

database.sync();

module.exports = colorsModel;