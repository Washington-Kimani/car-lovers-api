import express from "express";
import { getOne, getAll } from "../controller/get.controller";

const router = express.Router();

router.get('/', (req, res) => {
    res.send(`The router is working properly!!!`)
});

router.get('/api/driver/:id', getOne);

router.get('/api/drivers', getAll);

export default router;