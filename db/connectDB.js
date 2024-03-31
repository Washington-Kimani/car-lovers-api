import mongoose from "mongoose";

export const connectDb = () =>{
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Connected to Database");
        }).catch((err) => {
            console.log(`Error Connecting to the database ${err}`);
        });
};