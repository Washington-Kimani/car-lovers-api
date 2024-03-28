import Driver from "../models/driverModel";

export const postDriver = (req, res) => {
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

}