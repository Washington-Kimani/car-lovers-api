import express from "express";
import Driver from "../models/driverModel.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.send(`The router is working properly!!!`)
});

router.get('/api/driver:id', (req, res)=>{
    Driver.findOne({
        _id: req.params.id
    }).then(()=>{
        res.status(200).json(data)
    }).catch((err)=>{
        console.error(err)
    })
})

router.get('/api/drivers', (req, res) => {
    //res.send('Get all drivers');
    Driver.find()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Error Fetching Drivers' })
    });
});

router.post('/api/driver', (req, res) => {
    const { driver_name, car_make, car_model, car_year, avatar } = req.body
    const driver = new Driver({
        driver_name,
        car_make,
        car_model,
        car_year,
        avatar
    })

    driver.save()
        .then(() => {
            console.log("Driver added");
            res.status(200).json({ message: "Driver Added!" })
        }).catch((err) => {
            console.error(err);
        });

});

export default router;