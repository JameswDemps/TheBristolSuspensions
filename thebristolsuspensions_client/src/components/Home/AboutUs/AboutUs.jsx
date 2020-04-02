import React from 'react'

import './css/about-us.css'
import Image from 'react-image-webp';
import { strings } from '../strings';

export const AboutUs = () => {
    return (
        <>
            <div className='about-us-banner-image'>
                <div className='about-us-text-container'>
                    <div className='about-us-text'>
                        <h1>
                            {strings.ABOUT_US_TITLE}
                        </h1>
                        <p>
                            {strings.ABOUT_US_DESCRIPTION}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}