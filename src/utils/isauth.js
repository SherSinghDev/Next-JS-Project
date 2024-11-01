"use client"
import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";

export async function isAuth() {
    let { data: session, status } = useSession()
    // let router = useRouter()
    if (status === "loading") {
        setTimeout(() => { }, 5000)
    }
    else {
        console.log(status);
        // if (status !== "authenticated") {
        //     redirect("/api/auth/signin")
        // }

        let user = session?.user || undefined
        return user
    }
}