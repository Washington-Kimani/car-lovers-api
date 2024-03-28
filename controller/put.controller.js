import Driver from "../models/driverModel";

export const editDriver = (req, res) => {
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