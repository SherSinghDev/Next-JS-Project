import HeroSection from '@/app/components/herosection/HeroSection'
import React from 'react'
import data from "@/app/data/data.json"


async function page({params}) {
  const {id} = await params
  let serviceData = data.find((item)=>{
    return item.id == id
  })

  console.log(serviceData);
  
  return (
    <>
      <HeroSection title={<h1 className='text-6xl text-blue-500'>{serviceData.title}</h1>} btnText={""} imgSrc={serviceData.imgSrc} />
    </>
  )
}

export default page

// function ServiceText() {
//   return (
//     <>
      
//     </>
//   )
// }

// export {ServiceText}