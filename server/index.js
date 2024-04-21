import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';


import calorieRoute from './routes/calorie.route.js';
import userRoute from './routes/users.route.js';
//
const app = express();
dotenv.config();
mongoose.set('strictQuery', true)

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('Connected to database');
    } catch (error) {
        console.log(error);
    }
}

//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));


app.use("/calorie", calorieRoute);
app.use("/users", userRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";

    res.status(errorStatus).send(errorMessage);
})
app.listen(3000, () => {
    connect();
    console.log('Server is running on port 3000');
});
export default app


