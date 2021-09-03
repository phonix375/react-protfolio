import React from "react";
import TextLoop from "react-text-loop";
import Particles from 'react-particles-js';

const Slider = () => {
  return (
    <div className="slider-four">
      <div className="shane_tm_hero" id="home" data-style="one">
      <div className="frame-layout__particles">
          <Particles
            params={{
              particles: {
                number: {
                  value: 60,
                },
                size: {
                  value: 6,
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                },
              },
            }}
          />
        </div>
        <div className="background">
        
          <div
            className="image"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/slider/background1.jpg"
              })`,
            }}
            
          ></div>
                 <Particles />    
        </div>
        {/* End .background */}

        <div className="container ">
          <div className="content ">
          
            <div className="name_wrap">
              <h3>
                <span>
                  Kotliar
                  <br />
                </span>{" "}
                <TextLoop>
                  <span className="loop-text">Web Developer</span>
                  <span className="loop-text"> Front End Developer.</span>
                  <span className="loop-text"> Back End Developer.</span>
                  <span className="loop-text"> Full Stuck Developer.</span>
                </TextLoop>{" "}
                <span className="overlay_effect"></span>
              </h3>
            </div>
            {/* End title */}

            <div className="job_wrap">
              <span className="job">
                based in CANADA.
                <span className="overlay_effect"></span>
              </span>
            </div>
            {/* End designation */}
            <a
              href="#portfolio"
              className="white-fill-bg btn-outline btn-medium"
            >
              SEE PORTFOLIO
              <span className="overlay_effect"></span>
            </a>
          </div>
          {/* End content */}
        </div>
        {/* End .container */}
      </div>
    </div>
  );
};

export default Slider;
