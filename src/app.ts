import dotenv from "dotenv";
dotenv.config();
import express from "express";
import authRoutes from './routes/authRoutes'
import usersRoutes from './routes/userRoutes'

const app = express();

app.use(express.json());

//ROUTES

//auth
app.use('/auth', authRoutes)
//user
app.use('/user', usersRoutes)
console.log("Esto esta corriendo fuerte...");

export default app;
