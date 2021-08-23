import React from 'react';
import me from '../img/Me.png'
import { About, Description, Image, Hide} from '../styles'; 
//Framer motion
import {motion} from "framer-motion"
const AboutSection = () => {

    return(
<About>
    <Description>
        <motion.div className="title">
            <Hide>
                <motion.h2>Hi,</motion.h2>
            </Hide>
            <Hide>
                <motion.h2 >I'm <span>Alex</span></motion.h2>
            </Hide>
            <Hide>
                <motion.h2>full stack web developer</motion.h2>
            </Hide>
        </motion.div>
        <p>Contact me about any website idea that you have.</p>
        <button>Contact me!</button>
    </Description>
    <Image>
        <img src={me} alt="My item" />
    </Image>
    </About>
    )
};

//styled components

export default AboutSection