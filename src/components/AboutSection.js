import React from 'react';
import me from '../img/Me.png'
import { About, Description, Image, Hide} from '../styles'; 

const AboutSection = () => {
    return(
<About>
    <Description>
        <div className="title">
            <Hide>
                <h2>Hi,</h2>
            </Hide>
            <Hide>
                <h2>My name is <span>Alexy Kotliar</span></h2>
            </Hide>
            <Hide>
                <h2>a I'm Full stuck web developer</h2>
            </Hide>
        </div>
        <p>Contact me about any website idea that you have.</p>
        <button>Contact</button>
    </Description>
    <Image>
        <img src={me} alt="My item" />
    </Image>
    </About>
    )
};

//styled components

export default AboutSection