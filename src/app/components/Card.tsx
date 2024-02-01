import React, { useState, useEffect } from 'react';
import Image from 'next/image'

const Card = ({img,title,description,github}) => {
    
    return(
        
    <div w-8 h-8 bg-grey className=''>
        <img src={img} alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none"></img>
    </div>

    );
}; export default Card;