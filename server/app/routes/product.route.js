import productRequest from '../controllers/product.controller.js';
import express from 'express';

const productRoute = (app) => {
    express.Router().get('/', productRequest.findAll);
    app.use('/api/product', express.Router());
}
export default productRoute;