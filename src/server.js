import express from 'express';
import cors from 'cors';
import { establishConnection } from './config/DbConfig.js';
import productRouter from './router/ProductRouter.js';

const app = express();

app.use(cors());  // Enable CORS
app.use(express.json());  // Parse incoming JSON requests

// Serve static files from the frontend folder
app.use(express.static('frontend'));

// Use product router for /products routes
app.use('/products', productRouter);

// Start server
app.listen(9800, () => {
    console.log('Server running on http://localhost:9800');
    establishConnection();
});
