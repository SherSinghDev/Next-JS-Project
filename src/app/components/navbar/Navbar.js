import Link from 'next/link'
import React from 'react'
import styles from "@/app/components/navbar/navbar.module.css"

function Navbar() {
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
          <li>
            <Link href="/contact" className=' hover:text-blue-400 transition'>Contact</Link>
          </li>

        </ul>
      </nav>
    </>
  )
}

export default Navbar