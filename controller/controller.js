import Driver from "../models/driverModel.js";

export const getDriver = (req, res) => {
    Driver.findOne({
        _id: req.params.id
    }).then((data) => {
        res.status(200).json(data);
    }).catch((err) => {
        console.error(err);
    })
};

export const getDrivers = (req, res) => {
    //res.send('Get all drivers');
    Driver.find()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Error Fetching Drivers' });
        });
}

export const ifExist = (req, res, next) => {
    const name = req.body.driver_name;
    Driver.findOne({ driver_name: name })
        .then(user => {
            user ? res.status(409).json({ message: 'Driver already exists!', user: user }) : next()
        });
}

export const postDriver = (req, res) => {
    const { driver_name, car_make, car_model, car_year, avatar } = req.body;
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

}

export const updateDriver = (req, res) => {
    const id = req.params.id;
    const update = req.body;
    //console.log('update', update);
    Driver.findByIdAndUpdate(id, update, { new: true })
        .then(updatedUser => {
            //console.log('updatedUser', updatedUser);
            res.status(200).json(updatedUser);
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ message: "Error updating the driver" });
        });
}

export const deleteDriver = (req, res) => {
    const id = req.params.id;
    Driver.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({ message: "Deleted Successfully" });
        });
}