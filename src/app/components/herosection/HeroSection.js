"use client"
// import { useSession } from 'next-auth/react';
import Image from 'next/image'
// import { redirect } from 'next/navigation';
import { useEffect } from 'react';

function HeroSection({ title, btnText, imgSrc }) {
    // let { data: session } = useSession()
    // let count = 0;
    // useEffect(()=>{
    //     if(!session && count==2){
    //         // console.log(session);
    //         redirect("/api/auth/signin")
    //     }
    //     count++
    // },[session])
    // fetch("")

    return (
        <>
            <section className=' flex items-center mt-[120px]'>
                <div className='content flex-1'>
                    {title}
                    <p className='text-xl py-4'>This is our paragraph</p>
                    <button className='btn btn-red'>{btnText}</button>
                </div>
                <Image priority src={imgSrc} width={500} alt='next image' height={500} style={{ height: "auto", width: "500px" }} />
            </section>
        </>
    )
}

export default HeroSection