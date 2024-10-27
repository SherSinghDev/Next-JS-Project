import Image from 'next/image'
import React from 'react'

function HeroSection({ title, btnText, imgSrc }) {
    return (
        <>
            <section className=' flex items-center mt-[120px]'>
                <div className='content flex-1'>
                    {title}
                    <p className='text-xl py-4'>This is our paragraph</p>
                    <button className='btn btn-red'>{btnText}</button>
                </div>
                <Image src={imgSrc} width={500} alt='next image' height={500} style={{height:"auto"}} />
            </section>
        </>
    )
}

export default HeroSection