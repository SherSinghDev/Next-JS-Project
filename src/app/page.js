"use client"
import { useSession } from "next-auth/react";
import HeroSection from "./components/herosection/HeroSection";
import { redirect, useRouter } from "next/navigation";
function HeadingText() {
  // console.log(process.env.name);

  return (
    <h1 className='text-5xl'>Welcome to Our <span className='text-blue-400'>World</span></h1>
  )
}

export { HeadingText }

export default function Home() {
  // let { data: session, status } = useSession()
  // // let router = useRouter()
  // if (status === "loading") {
  //   setTimeout(() => {},5000)
  // }
  // else{
  //   console.log(status); 
  //   if(status!=="authenticated"){
  //     redirect("/api/auth/signin")
  //   }

  //   let user = session.user
  //   console.log(user);  
  // }


  return (
    <>
      <HeroSection title={<HeadingText />} btnText={"About Us"} imgSrc={"https://cdn.pixabay.com/photo/2017/08/11/10/54/industry-2630319_640.jpg"} />
    </>
  );
}

