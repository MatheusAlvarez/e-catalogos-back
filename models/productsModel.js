const Sequelize = require('sequelize');
const database = require('../config/dbConfig');

const productsModel = database.define('products', {
    id:{
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING(255),
        allowNull: false
    },
    reference:{
        type: Sequelize.STRING(30),
        allowNull: false
    },
    price:{
        type: Sequelize.INTEGER(12),
        allowNull: false
    },
    category: {
        type: Sequelize.STRING(50),   
        allowNull: true 
    },
    description:{
        type: Sequelize.STRING(8000),
        allowNull: true
    },
    brand:{
        type: Sequelize.STRING(100),
        allowNull: true
    },
    gender:{
        type: Sequelize.STRING(50),
        allowNull: true
    }
        
})

database.sync();

module.exports = productsModel;