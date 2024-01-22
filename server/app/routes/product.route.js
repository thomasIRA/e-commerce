import product from '../controllers/product.controller.js';
import express from 'express';
const router = express.Router();

const productRoute = (app) => {
    router.get('/', product.findAll);
    router.post('/', product.create);
    router.get('/:id', product.findOne);
    router.put('/:id', product.update);
    router.delete('/:id', product.delete);
    
    app.use('/api/product', router);
}
export default productRoute;