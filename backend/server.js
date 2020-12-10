import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import path from 'path';
import uploadRouter from './routers/uploadRouter.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb+srv://shubham:shubhamatin@cluster0.uwhud.mongodb.net/<dbname>?retryWrites=true&w=majority' || 'mongodb:/ / localhost / brain', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/frontend/build/index.html'))
);

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`server is running on port ${port}`))