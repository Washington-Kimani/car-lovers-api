import express from "express";
import Driver from "../models/driverModel.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.send(`The router is working properly!!!`)
});

router.get('/api/driver/:id', (req, res)=>{
    Driver.findOne({
        _id: req.params.id
    }).then((data)=>{
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

const ifExist = (req, res, next) =>{
    const name = req.body.driver_name;
    Driver.findOne({ driver_name : name })
    .then(user => { 
        user ? res.status(409).json({ message: 'Driver already exists!', user: user}) : next()
    });
}

router.post('/api/driver',  ifExist , (req, res) => {
    const { driver_name, car_make, car_model, car_year, avatar } = req.body
    const driver = new Driver({
        driver_name,
        car_make,
        car_model,
        car_year,
        avatar
    });

    driver.save()
        .then(() => {
            console.log("Driver added");
            res.status(200).json({ message: "Driver Added!" });
        }).catch((err) => {
            console.error(err);
        });

});

router.put('/api/driver/:id', (req, res) => {
    const id = req.params.id;
    const update = req.body;
    //console.log('update', update);
    Driver.findByIdAndUpdate(id, update, {new: true})
    .then(updatedUser => {
        //console.log('updatedUser', updatedUser);
        res.status(200).json(updatedUser);
        })
    .catch(err=>{
        console.error(err);
        res.status(500).json({message:"Error updating the driver"});
    });
});

function getSortedDrivers(sortType){
    return function(a, b){
      let aVal = a[sortType];
      let bVal = b[sortType]
      if (aVal < bVal) {
          return -1;
      } else if (aVal > bVal)  {
          return 1;
      } else {
          return 0;
      }
    };
}

router.delete('/api/driver/:id', (req, res)=>{
    const id= req.params.id;
    Driver.findByIdAndDelete(id)
      .then(()=>{
        res.status(200).json({message:"Deleted Successfully"})
      });
});

export default router;