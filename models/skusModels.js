const Sequelize = require('sequelize');
const database = require('../config/dbConfig');
const productsModel = require('./productsModel');

const skusModels = database.define('skus', {
    id:{
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    size:{
        type: Sequelize.STRING(10),
        allowNull: false        
    },
    stock:{
        type: Sequelize.BIGINT(20),
        allowNull: false
    },
    product_id:{
        type: Sequelize.INTEGER(11),
        allowNull: false,
        references:{
            model: productsModel,
            key: 'id'
        }
    }
})

database.sync();

module.exports = skusModels;