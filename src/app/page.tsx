import Image from "next/image"
import Navbar from "./components/Navbar"
import Mebox from "./components/Mebox"
import Card from "./components/Card"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
  
      <Mebox imgsize={400} imgname='IMG_6690.JPG'/>

      <hr className="border-t-2 border-gray-300 mb-4 mt-4"></hr>

      <div className=" w-2/3 mx-auto">
        <Card />
      </div>

      
    </main>
  );
}
