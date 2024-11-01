import { NextResponse } from "next/server"
import connect from "../../../../utils/mongodb";
import clientModel from "../../../../models/clients";

export async function POST(req) {
    try {
        let res = await req.json()
        // console.log(res);
        connect()
        let newClient = await clientModel.create(res)
        // console.log(newClient)
        return NextResponse.json({ data: true })
    }
    catch (e) {
        throw e
        return NextResponse.json({ data: false })
    }
}