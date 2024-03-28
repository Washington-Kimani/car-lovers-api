import express from "express";
import { editDriver } from "../controller/put.controller.js";
import Driver from "../models/driverModel.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.send(`The router is working properly!!!`)
});



router.put('/api/driver/:id', editDriver);


export default router;