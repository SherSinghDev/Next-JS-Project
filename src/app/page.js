import Image from "next/image";
import HeroSection from "./components/herosection/HeroSection";

function HeadingText(){
  return(
    <h1 className='text-5xl'>Welcome to Our <span className='text-blue-400'>World</span></h1>
  )
}

export {HeadingText}

export default function Home() {
  return (
    <>
      <HeroSection title={<HeadingText/>} btnText={"About Us"} imgSrc={"https://cdn.pixabay.com/photo/2017/08/11/10/54/industry-2630319_640.jpg"} />
    </>
  );
}

