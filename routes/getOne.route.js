import express from "express";
import { getOne, getAll } from "../controller/get.controller.js";

const router = express.Router();


router.get('/', getOne);

router.get('/', getAll);

export default router;