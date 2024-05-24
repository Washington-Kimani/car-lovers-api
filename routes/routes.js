import express from "express";
import { deleteDriver, getDriver, getDrivers, getCars, ifExist, postDriver, postDrivers, updateDriver  } from "../controller/controller.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.send(`The router is working properly!!!`)
});

router.get('/api/driver/:id', getDriver);

router.get('/api/drivers', getDrivers);

router.get('/api/cars', getCars);

router.post('/api/driver',  ifExist , postDriver);

router.post('/api/drivers', ifExist, postDrivers)

router.put('/api/driver/:id', updateDriver);

router.delete('/api/driver/:id', deleteDriver);

export default router;