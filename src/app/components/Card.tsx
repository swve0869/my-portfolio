import React, { useState, useEffect } from 'react';
import { FaGithub } from "react-icons/fa";
import Image from 'next/image'


/*
const Card = ({ imageSrc, title, description, githubLink }) => {
    
    return(
        
    <div className=' flex justify w-full h-800 rounded-xl p-5 '>
        <img src={imageSrc}  className=" w-15 h-15 px-10 "></img>
        <p>safdsfl;askdj</p>
        <div className="bg-fixed background-image:https://www.pexels.com/photo/mountains-covered-with-snow-1785493/" ></div>
    </div>

    );
}; export default Card;
*/

const Card = ({ imageSrc, title, description, githubLink, videoLink }) => {
    return (
      <div className="max-w-md m-4 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl card transform transition-transform duration-300 ease-in-out hover:scale-110">
        <div className="md:flex">
          <div className="md:flex-shrink-0 flex pl-4 items-center justify-center">
            <img className="h-48 w-full object-cover md:w-48" src={imageSrc} alt="Card image" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
                <p className="mt-2 text-gray-500">{description}</p>
                <a href={githubLink} className="text-indigo-500 mt-4 flex items-center">
                <FaGithub className="h-6 w-6 mr-2" />
                    GitHub
                </a>          
            </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  