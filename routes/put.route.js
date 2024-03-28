import express from "express";
import { editDriver } from "../controller/put.controller.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.send(`The router is working properly!!!`)
});



router.put('/', editDriver);


export default router;