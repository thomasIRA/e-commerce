import { findAll } from '../controllers/product.controller.js';
import express from 'express';
const router = express.Router();

const productRoute = (app) => {
    router.get('/', findAll);
    app.use('/api/product', router);
}
export default productRoute;