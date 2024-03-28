import express from 'express';
import { deleteDriver } from "../controller/delete.controller.js";

const router = express.Router();

router.delete('/', deleteDriver);

export default router;