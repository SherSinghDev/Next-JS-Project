import { NextResponse } from "next/server"
import connect from "../../../../utils/mongodb";
import clientModel from "../../../../models/clients";
export async function GET(req) {
    connect()
    let allUsers = await clientModel.find()
    // console.log(allUsers);

    return NextResponse.json(allUsers)
}   