import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { animate, motion } from 'framer-motion';

const Nav = () => {
    return(
        <StyledNav>
            <h1><Link to="/" id="logo">Alexy Kotliar</Link></h1>
            <ul>
                <li>
                    <Link to="/">About</Link>
                    <Line transition={{duration: 0.75}} initial={{width:"0%" }} animate={{width: "50%"}}/>
                </li>
                <li>
                    <Link to="/work">My Work</Link>
                    <Line transition={{duration: 0.75}} initial={{width:"0%" }} animate={{width: "50%"}}/>


                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                    <Line transition={{duration: 0.75}} initial={{width:"0%" }} animate={{width: "50%"}}/>


                </li>
            </ul>
        </StyledNav>
    )
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color:#282828 ;
    position: sticky;
    top: 0;
    z-index:10;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
    }
    #logo{
        font-size: 2rem;
        font-family: 'lobster', sans-serif;
        font-weight: lighter;
        @media (max-width: 1300px){
            padding: 1rem;
            display: inline-block;
        }
    }
    li{
        padding-left: 10rem;
        position: relative;
    }
    @media (max-width: 1300px){
        flex-direction: column;
        padding: 2rem 0rem;
        ul{
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
        }
        li{
            padding: 0;
        }
    }
`

const Line = styled(motion.div)`
    height:0.3rem;
    background: #23d997;
    width: 0%;
    position: absolute;
    bottom: -80%auto;
    left: 60%;
`
export default Nav;