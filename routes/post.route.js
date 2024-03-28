import express from 'express';
import { postDriver } from '../controller/post.controller';
const router  = express.Router();

const ifExist = (req, res, next) => {
    const name = req.body.driver_name;
    Driver.findOne({ driver_name: name })
        .then(user => {
            user ? res.status(409).json({ message: 'Driver already exists!', user: user }) : next()
        });
}

router.post('/api/driver', ifExist, postDriver);