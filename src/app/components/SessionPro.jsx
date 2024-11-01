"use client"
import {SessionProvider} from "next-auth/react"
function SessionPro({children}) {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default SessionPro