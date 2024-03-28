import express from express;
import { deleteDriver } from "../controller/delete.controller";

const router = express.Router();

router.delete('/api/driver/:id', deleteDriver);

export default router;