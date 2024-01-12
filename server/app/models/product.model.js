module.exports = (connex, Sequelize) => {
    const Product = connex.define('product', {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        photo: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.REAL
        },
        type: {
            type: Sequelize.STRING
        }
    });
    return Product;
}