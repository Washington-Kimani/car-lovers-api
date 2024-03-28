import express from "express";
import http from "http";
import cors from 'cors';
import morgan from 'morgan';
import getOne from './routes/getOne.route.js'
import getAll from './routes/getAll.route.js'
import postRoute from './routes/post.route.js'
import putRoute from './routes/put.route.js'
import deletetRoute from './routes/delete.route.js'
import dotenv from "dotenv";
import { connectDb } from "./db/connectDB.js";
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
app.use('/api/driver/:id', getOne); 
app.use('/api/drivers', getAll);
app.use('/api/driver', postRoute);
app.use('/api/driver/:id', putRoute);
app.use("/api/driver/:id", deletetRoute);


//Test route
app.get('/', (req, res) => {
    res.send(`The router is working properly!!!`)
});

//Connect To MongoDB
connectDb();

server.listen(port, console.log(`Server is running on port ${port}`));