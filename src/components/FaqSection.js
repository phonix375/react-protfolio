import React from 'react';
import Toggle from './Toggle'

import styled from 'styled-components';
import { About } from '../styles';
import { AnimateSharedLayout } from 'framer-motion';

import { useScroll } from './useScroll';
import {scrollReveal} from '../animation'

const FaqSection = () => {
    const [element, controls] = useScroll();

    return(
        <Faq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <h2>Any questions? <span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title="How do I start?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ex.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                
            </ Toggle>
            <Toggle title="Difrent payment methods">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ex.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </ Toggle>
            <Toggle title="Daily Schedual">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ex.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </ Toggle>
            <Toggle title="What products do you offer">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ex.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(About)`  
display: block;
span{
    display:block;
}
h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}
.faq-line{
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
}
.question{
    padding:3rem 0rem;
    cursor: pointer;
}
.answer{
    padding: 2rem 0rem;
}
p{
    padding: 1rem 0rem;
}
`;


export default FaqSection;

