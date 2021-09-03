import React from "react";
import Reveal from "react-reveal/Reveal";

const About = () => {
  return (
    <>
      <div className="shane_tm_section" id="about">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <Reveal effect="fadeInLeft">
                  <div className="image">
                    <img src="/img/placeholders/background.jpg" alt="placeholder" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + "img/about/1.jpg"
                        })`,
                      }}
                    ></div>
                  </div>
                </Reveal>
                {/* End image */}
              </div>
              {/* End left */}

              <div className="right">
                <Reveal effect="fadeInLeft">
                  <div className="shane_tm_title">
                    <span>About Me</span>
                    <h3>Hi! I'm Alexy</h3>
                  </div>
                  <div className="text">
                    <p>
                    I'm a web designer and front/back-end developer and I love what I do!
I began my journey with everything that has to do with computers, from building computers from parts to 3D modeling and even working on video game mods.
In the last 2 years, I found my passion for web design and development! Started by teaching myself from video tutorials on youtube throw online courses from the Georgia Institute of Technology and Harvard online and now I'm enrolled in a Bootcamp at the University of Toronto and I LOVE IT! 
                    </p>
                  </div>
                  <div className="shane_tm_button">
                    <a href="img/resume/Alexy_Kotliar_Resume.PDF" download>
                      Download CV
                    </a>
                  </div>
                </Reveal>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
    </>
  );
};

export default About;
