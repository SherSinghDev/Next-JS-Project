import mongoose from "mongoose"

export default function connect(){
    mongoose.connect(process.env.mongoURI)
    console.log("connected succesfully....");
}