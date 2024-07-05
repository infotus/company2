import React from 'react';
import {Link} from 'react-router-dom';
import backgroundImage from '/src/assets/future-with-ai.png';

export default function Home() {
    return (
        <div id="main">
            <img className='w-full h-screen  object-cover object-center' src={backgroundImage}/>
            <div className='w-full h-screen absolute top-0'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center ld:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-cyan-800 '>
                    HIVIAI
                </h1>
                </div>
            </div>
        </div>
    );
};