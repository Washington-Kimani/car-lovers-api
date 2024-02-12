import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
    driver_name:{
        type: String,
        required: true
    },
    car_make:{
        type: String,
        required: true
    },
    car_model:{
        type: String,
        required: true
    },
    car_year:{
        type: String,
        required: true
    },
    avatar:{
        type: String,
        required: true
    }
},
{timestamps: true}
);

const Driver = mongoose.model('car_lover', driverSchema);

export default Driver;