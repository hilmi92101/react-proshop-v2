// packages
import express from 'express';
import dotenv from 'dotenv';

// connection
import connectDB from './config/db.js';

// routes
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';

// middleware
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

// app
const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.get("/", (req, res) => {
    res.send('API is running...');
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
