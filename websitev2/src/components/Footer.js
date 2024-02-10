import React from 'react'
import '../styles/Footer.css'
import { SocialIcon } from 'react-social-icons';
import IllinoisWordmark from '../assets/illinois-wordmark.png'

function Footer() {
    return (
        <footer>
            <a href="https://illinois.edu" target="_blank" rel="noopener noreferrer">
                <img className="ill-wordmark" src={IllinoisWordmark} alt="Illinois Wordmark" />
            </a>
            <p>
                <SocialIcon url='mailto:ghostuiuc@gmail.com' bgColor='#f15735' fgColor='#ffffff'/>
                {' '}
                <SocialIcon url="https://www.linkedin.com/company/ghost-electric-motorcycle/" bgColor='#f15735' fgColor='#ffffff'/>
                {' '}
                <SocialIcon url="https://www.instagram.com/ghost_uiuc/" bgColor='#f15735' fgColor='#ffffff'/>
                {' '}
                <SocialIcon url="https://discord.gg/56yq68vJKX" bgColor='#f15735' fgColor='#ffffff'/>
            </p>
        </footer>
    );
}

export default Footer