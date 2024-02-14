import Image from "next/image"
import Navbar from "./components/Navbar"
import Mebox from "./components/Mebox"
import Card from "./components/Card"
import Line from "./components/Line"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
  
      <Mebox imgsize={400} imgname='IMG_6690.JPG'/>
      <Line />
      <div className="text-6xl text-center p-8">Projects</div>
      <div className="flex flex-col w-3/4 mx-auto center">
        <Card imageSrc="scrabble.png" 
                title="CADUS NYAGI Ultrasond Object Detection" 
                description="My CU Boulder Senior Capstone Project was sponsored by CADUS NYAGI an organization that focuses on outreach programs to train doctors in remote areas of the world in reading ultrasounds." 
                githubLink="https://github.com/tylerpaik/CADUS-NYAGI"/>
        
        <Card imageSrc="scrabble.png" 
              title="C++ Scrabble" 
              description="A scrabble game built with QT creator in C++. Contains all functionality of normal scrabble but includes a special bomb tile to mix up game play. Word scoring algorithms, valid word checks, and GUI all built from scratch." 
              githubLink="https://github.com/swve0869/QtCreatorScrabble"/>
        
        <Card imageSrc="mha.png" 
              title="Musical History Analyis" 
              description="A full stack web application using React, Flask, MongodDB, Spotify API, Billboard API and temporarily hosted on GCP. The project goal was to look at historical trends in musical attributes from popular music. Data was pulled from the APIs into a mongoDB database. Users can execute queries over certain periods of time and read trends in popular music. " 
              githubLink="https://github.com/swve0869/Musical-History-Analysis"/>
        
        <Card imageSrc="dfs.png" 
              title="Distributed File System" 
              description="A distributed file system written in C for Linux. Uses Unix sockets to facilitate file storage redundancy across a variable number of servers. Files are split into n chunks and mutiple copies of each chunk are stored on different servers." 
              githubLink="https://github.com/swve0869/c_distributed_file_system"/>
        
        <Card imageSrc="proxy.jpg" 
              title="Web Proxy Server" 
              description="A C Unix sokcet based proxy server that works on http. Includes blocklist capabilities and can block on ip or domain name. Implements site cacheing timeouts as well as fill access locks."
              githubLink="https://github.com/swve0869/c_proxy_server/tree/main"/>
        


      </div>

      
    </main>
  );
}
