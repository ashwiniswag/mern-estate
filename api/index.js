import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.router.js';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('COnnected to MongoDB');
}).catch(err => console.log(err));

const app = express();
app.use(express.json());

app.listen(3000,() => {
    console.log('Servr is running on port 3000');
})

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);