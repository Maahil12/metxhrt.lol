import React, { useEffect, useState } from 'react';
import '../Styles/home.css';
import pfp from '../Assets/manta.gif';
import config from '../config/config.json';

const Name = config.metx.name;
const Intro = config.metx.intro;

function Home() {
    return(
        <>
        <div className='home-container'>
            <div className="overlay">
                <div className="content">
                    <img className='pfp' src={pfp} alt="pfp" />
                    <h1 className='metx'>{Name}</h1>
                    <span id='fix'>
                    <p id='p'>{Intro}</p>
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;