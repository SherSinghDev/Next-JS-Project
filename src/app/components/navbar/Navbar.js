"use client"
import Link from 'next/link'
import React, { useState } from 'react'
// import styles from "@/app/components/navbar/navbar.module.css"
import { isAuth } from "../../../utils/isauth"

function Navbar() {
  let [myuser,setMyuser] = useState("")
  let user = isAuth()
  user.then(e => setMyuser(e))

  return (
    <>
      <nav className=" border border-white flex align-top justify-between px-10 py-4 items-center rounded-[20px]  mt-8">
        <div className='logo text-[30px] text-blue-400 cursor-pointer'>Logo</div>
        <ul className=' flex gap-8'>
          <li>
            <Link href="/" className=' hover:text-blue-400 transition'>Home</Link>
          </li>
          <li>
            <Link href="/about" className=' hover:text-blue-400 transition'>About</Link>
          </li>
          <li>
            <Link href="/service" className=' hover:text-blue-400 transition'>Services</Link>
          </li>
          {!myuser && <li>
            <Link href="/contact" className=' hover:text-blue-400 transition'>Sign up</Link>
          </li>}
          {myuser && <li>
            <Link href="/clients" className=' hover:text-blue-400 transition'>All Clients</Link>
          </li>}
          {myuser && <li>
            <Link href="/api/auth/signout" className=' hover:text-blue-400 transition'>Log Out</Link>
          </li>}
          {!myuser && <li>
            <Link href="/api/auth/signin" className=' hover:text-blue-400 transition'>Sign in</Link>
          </li>}
        </ul>
      </nav>
    </>
  )
}

export default Navbar