import db from '../models/index.js';
const Product = db.products;
const productRequest = {
    findAll : (req, res) => {
        Product.findAll()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || 'Some error occured' }))
    },

}

export default productRequest;