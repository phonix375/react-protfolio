import React from 'react';
import me from '../img/Me.png'
import { About, Description, Image, Hide} from '../styles'; 
//Framer motion
import {motion} from "framer-motion"
import {titleAnimation, fade, photoAnimation} from '../animation'


const AboutSection = () => {

    return(
<About>
    <Description>
        <motion.div className="title">
            <Hide>
                <motion.h2 variants={titleAnimation}>Hi,</motion.h2>
            </Hide>
            <Hide>
                <motion.h2 variants={titleAnimation}>I'm <span>Alex</span></motion.h2>
            </Hide>
            <Hide>
                <motion.h2 variants={titleAnimation}>full stack web developer</motion.h2>
            </Hide>
        </motion.div>
        <motion.p variants={fade}>Contact me about any website idea that you have.</motion.p>
        <motion.button variants={fade}>Contact me!</motion.button>
    </Description>
    <Image>
        <motion.img src={me} alt="My item"  variants={photoAnimation} />
    </Image>
    </About>
    )
};

//styled components

export default AboutSection