import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { redirect } from "next/navigation"
import clientModel from "./models/clients"

export const { signIn, signOut, auth, handlers } = NextAuth({
    providers: [
        Credentials({
            type: "credentials",
            credentials: {
                email: { label: "Email", type:"email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                let {email,password} = credentials
                let user = await clientModel.findOne({email})
                console.log(user);
                
                if(!user){
                    return null
                }
                if(user.password!=password){
                    return null
                }
                return user
                
            }
        }),
    ],
    session:{
        strategy:"jwt"
    }
})
