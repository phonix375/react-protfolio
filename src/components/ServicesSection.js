import React from 'react';
//import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

import Home1 from '../img/home1.jpg';


import javascript from '../img/javascript.svg';
import python from '../img/python.svg';
import react from '../img/react.svg';
import mongodb from '../img/mongodb.svg';
import nodejs from '../img/nodejs.svg';


//scroll animation
import { fade, scrollReveal } from '../animation';
import { useScroll } from './useScroll';

import { About, Description, Image, Hide } from '../styles';
import styled from 'styled-components';


const ServiceSection = () => {
    const [element, controls] = useScroll();

    return (
        <Sevices variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <Description>
                <h2>Top <span>Skills</span></h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={python} alt="icon" />
                            <h3>Python</h3>
                        </div>
                        <p>Building backend with frameworks like Flask and Django</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={react} alt="icon" />
                            <h3>React</h3>
                        </div>
                        <p>Using React to build styled and fast web apps</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={javascript} alt="icon" />
                            <h3>Javascrip</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={nodejs} alt="" />
                            <h3>NodeJS</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={mongodb} alt="" />
                            <h3>MongoDB</h3>
                        </div>
                        <p>using noSQL DB</p>
                    </Card>
                </Cards>
            </Description>
            <SecondImage>
                <img src={Home1} alt="" />
            </SecondImage>

        </Sevices>
    )
}

const Sevices = styled(About)`
    overflow: hidden;
    h2{
        padding-bottom: 5rem;
    }
    p{
        width:70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const Card = styled.div`
    flex-basis: 20rem;
    .icon{
        display:flex;
        align-items: center;
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding:1rem
        }
    }
    img{
        height: 50px;
    }
`

const SecondImage = styled(Image)`
    @media (max-width: 1300px){
        display: none;
    }
`

export default ServiceSection;