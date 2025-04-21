import React, {useState} from 'react';
import './Hero.css';
import { useDarkMode } from './DarkModeContext';
import CallToAction from './Hero-components/CallToAction';
import HealthhubContainer from './Hero-components/HealthhubContainer';
import HealthToolsContainer from './Hero-components/HealthToolsContainer';
import HeroTopicsContainer from './Hero-components/HeroTopicsContainer';
import Testimonials from './Hero-components/Testimonials';
import StepsWrapper from './Hero-components/StepsWrapper';
import MainHero from './Hero-components/MainHero';


function Hero() {
    const { darkMode: isDarkMode } = useDarkMode();
        return (
            <div className={`hero-container ${isDarkMode ? 'dark' : ''}`}>
                <MainHero/>
                <HeroTopicsContainer/>
                <HealthhubContainer/>
                <HealthToolsContainer/>
                <Testimonials/>
                <StepsWrapper/>
                <CallToAction/>
            </div>
        );
    }

export default Hero;
