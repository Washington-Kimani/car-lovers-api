import Driver from '../models/driverModel.js'

export const getOne = (req, res) => {
    Driver.findOne({
        _id: req.params.id
    }).then((data) => {
        res.status(200).json(data)
    }).catch((err) => {
        console.error(err)
    })
}

export const getAll = (req, res) => {
    //res.send('Get all drivers');
    Driver.find()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Error Fetching Drivers' })
        });
}