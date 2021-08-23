import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
//Images
import athlete from '../img/athlete-small.png';
import goodtimes from '../img/goodtimes-small.png';
import theracer from '../img/theracer-small.png';
// import animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

//my images

import game from '../img/game.jpeg'
import proTrader from '../img/Protrader.png'
const OurWork = () => {
    return(
        <Work style={{ background:"#fff"}} exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <Movie>
                <h2>Guesss the opinion game</h2>
                <div className='line'></div>
                <Link to="/work/Guess-the-Opinion">
                <img src={game} alt="athlete" />
                </Link>
            </Movie>
            <Movie>
                <h2>Pro Trader</h2>
                <div className='line'></div>
                <Link to='/work/Pro-Trader'>
                <img src={proTrader} alt="athlete" />
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className='line'></div>
                <Link>
                <img src={theracer} alt="athlete" />
                </Link>
            </Movie>
        </Work>
    )
};

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
`
const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #cccccc;
        margin-bottom:3rem ;
    }
    img{
        width:100% ;
        height: 70vh;
        object-fit: cover;

    }
`

export default OurWork;