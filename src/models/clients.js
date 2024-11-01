import mongoose from "mongoose"

let clientSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    mobile:String,
    company:String,
    password:String
})

let clientModel = mongoose.models?.query || mongoose.model("query",clientSchema)

export default clientModel