import React, { useEffect, useState } from 'react';
import '../Styles/background.css';

function Background() {
    return(
        <>
        <div className="background-video">
            <video autoPlay loop muted src='https://r2.guns.lol/9df559e6-ed91-40a9-8c64-ba2d6221df9a.mp4' />
        </div>
        </>
    )
}

export default Background;