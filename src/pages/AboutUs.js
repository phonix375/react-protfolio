import React from 'react';

import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';

import {ScrollTop} from '../components/ScrollTop';


// import animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

const AboutUs = () => {
    return(
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show" style={{overflow: "hidden"}}>
          <AboutSection />  
          <ServiceSection />
          <FaqSection />
          <ScrollTop />
        </motion.div>
    )
}

export default AboutUs;