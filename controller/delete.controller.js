import Driver from "../models/driverModel.js";

export const deleteDriver = (req, res) => {
    const id = req.params.id;
    Driver.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json({ message: "Deleted Successfully" })
        });
}