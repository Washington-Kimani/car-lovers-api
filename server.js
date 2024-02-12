import express from "express";
import http from "http";
import mongoose from "mongoose";
import router from "./routes/routes.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 8080;

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

//Connect To MongoDB
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to Database");
    }).catch((err) => {
        console.log(`Error Connecting to the database ${err}`);
    })

server.listen(port, console.log(`Server is running on port ${port}`));