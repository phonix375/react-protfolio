import React,{ useEffect } from 'react';
// import animations
import {motion} from 'framer-motion';
import {pageAnimation, titleAnimation} from '../animation';

import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';


const ContactUs = () => {


    return(
        <ContactStyle 
        exit="exit" 
        variants={pageAnimation} 
        initial="hidden"
        animate="show"
        style={{ background: "#fff"}}>
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnimation}>Get in touch</motion.h2>
                </Hide>
            </Title>
            <div>
            <Hide>
            <Social variants={titleAnimation}>
                    <Circle />
                        <h2>Send Us A Message</h2>
                </Social>
                </Hide>
                <Hide>
                <Social variants={titleAnimation}>
                <Circle />
                        <h2>Send an Email</h2>
                </Social>
                </Hide>
                <Hide>
                <Social variants={titleAnimation}>
                <Circle />
                        <h2>Social media</h2>
                </Social>
                </Hide>
            </div>
            <TagCloud 
        style={{
          fontFamily: 'sans-serif',
          fontSize: 30,
          fontWeight: 'bold',
          fontStyle: 'italic',
          color: () => randomColor(),
          padding: 5,
          width: '100%',
          height: '100%'
        }}>
        <div style={{fontSize: 50}}>react</div>
        <div style={{color: 'green'}}>tag</div>
        <div rotate={90}>cloud</div>
        ...
      </TagCloud>
        </ContactStyle>
    )
}



const ContactStyle = styled(motion.div)`
padding: 5rem 10rem;
color:#353535 ;
min-height: 90vh;
@media (max-width: 1300px){
    h2{
    font-size: 2rem;
    }
    padding: 2rem;

}
`

const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
`;

const Hide = styled.div`
    overflow: hidden;
`;
const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`
const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    h2{
        margin: 2rem;
    }
`

export default ContactUs;