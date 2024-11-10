import { Router } from 'express';
import { saveProduct, getAllProduct, updateProduct, deleteProduct } from '../controller/ProductController.js';

const productRouter = Router();

// Route to save a new product
productRouter.post('/save', saveProduct);

// Route to get all products
productRouter.get('/getAll', getAllProduct);

// Route to update a product
productRouter.put('/update/:id', updateProduct);

// Route to delete a product
productRouter.delete('/delete/:id', deleteProduct);

export default productRouter;
