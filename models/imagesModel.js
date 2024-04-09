const Sequelize = require('sequelize');
const database = require('../config/dbConfig');
const productsModel = require('./productsModel');

const imagesModel = database.define('images', {
    id:{
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true        
    },
    path:{
        type: Sequelize.STRING(255),
        allowNull: false
    },
    order:{
        type: Sequelize.TINYINT(4),
        allowNull: true
    },
    product_id:{
        type: Sequelize.INTEGER(11),
        allowNull: true,
        references:{
            model: productsModel,
            key: 'id'
        }
    }
})

database.sync();

module.exports = imagesModel;