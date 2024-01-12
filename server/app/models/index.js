import dbConfig from '../config/db.config.js';
import Sequelize from 'sequelize';
import product from './product.model.js';
const connex = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    port: 3306,
    operatorAliases: false
});

const db = {};
db.Sequelize = Sequelize;
db.connex = connex;
db.products = product(connex, Sequelize);

export default db;