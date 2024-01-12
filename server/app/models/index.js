const dbConfig = require('../config/db.config');
import Sequelize from 'sequelize';
const Product = require('../models/product.model')

const connex = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    port: 3306,
    operatorAliases: false
});

const db = {};
db.Sequelize = Sequelize;
db.connex = connex;
db.products = Product(connex, Sequelize);

export default db;