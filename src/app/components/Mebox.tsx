'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
//import ReactRoundedImage from "react-rounded-image"

const Mebox = ({imgsize,imgname}:{imgsize:any,imgname:any}) => {
    
    return(
        <div className="shadow-lg p-8 w-full h-180 mx-auto" >
        <div className="flex justify-left items-center mb-6 rp-5">
          
        <div className="flex flex-wrap justify-center pr-50">
            <div className="w-12/12 sm:w-8/12 max-w-3xl px-4 ">
                <img src={imgname} alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
            </div>
        </div>

        <div className="w-1/2">
            <h2 className="text-6xl font-semibold animate-bounce">Hi, I&apos;m Swami!</h2>
            <hr className="border-t-2 border-gray-300 mb-4 mt-4"></hr>
            <h2 className="text-l font-thin">a Computer Science Student from the University of Colorado Boulder. I love software engineering and its applications. This is my portfolio site built from scratch using React, NextJs and is hosted on Vercel.</h2>

        </div>
        </div>
        
      </div>
      

    );

}; export default Mebox;

/*

  <ReactRoundedImage
                image={imgname}
                roundedColor="#321124"
                imageWidth={imgsize}
                imageHeight={imgsize}
                roundedSize="0"
                hoverColor="#DD1144"
                className='rp-40'
            />

            */