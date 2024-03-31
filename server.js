import express from "express";
import http from "http";
import cors from 'cors';
import morgan from 'morgan';
import dotenv from "dotenv";
import { connectDb } from "./db/connectDB.js";
import router from "./routes/routes.js";
dotenv.config();


const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 8080;

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('combined'));

//All Routes
app.use('/', router);


//Test route
app.get('/', (req, res) => {
    res.send(`The router is working properly!!!`)
});

//Connect To MongoDB
connectDb();

server.listen(port, console.log(`Server is running on port ${port}`));