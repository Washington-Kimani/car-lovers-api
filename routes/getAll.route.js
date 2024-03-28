import express from "express";
import { getAll } from "../controller/get.controller.js";

const router = express.Router();

router.get('/', getAll);

export default router;